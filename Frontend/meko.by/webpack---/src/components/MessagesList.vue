<template>
  <div ref="messageList" class="message-list">
    <div v-if="needContactForm && !isOffline && contactFormDisplay === CONTACT_FORM_DISPLAY.AT_BEGINNING_DIALOGUE">
      <div>
        <ConsultantMessage
          :message="contactFormMessage"
          :is-follow="false"
          :chat-name="chatName"
          :download-url="downloadUrl"
          :isIE="isIE"
        >
          <ContactForm
            :config="contactFormConfig"
            :handler="sendContactForm"
            :form-state="formState"
            :user="user"
            :country-code="detectedCountryCode"
            :isIE="isIE"
            :personal-data-consent="personalDataConsent"
            :personal-data-link="personalDataLink"
            @update-form-state="updateFormState"
          />
        </ConsultantMessage>
      </div>
    </div>

    <div class="message-list__box" v-else-if="messages.length || isOffline">
      <div ref="messages" class="message-row" v-for="(message, index) in messages" :key="index">
        <div
          v-if="!isFollowMessage(message, index) && (!messages[index - 1] || isPrevDayMessage(message, index))"
          class="message-list__date"
        >
          {{ message.time | calendarDay }}
        </div>

        <ConsultantMessage
          :message="message.fromMe ? message : replaceManagerMessageUser(message)"
          :default-avatar="!!message.virtual"
          :is-follow="isFollowMessage(message, index)"
          :download-url="downloadUrl"
          :chat-name="chatName"
          :isIE="isIE"
          @update-files="getFilesLink(message.fileItems)"
          @open-image="openImage($event, message)"
          @send-suggestion="sendSuggestion"
          v-observe-visibility="(isVisible, entry) => visibilityMessage(isVisible, entry, message)"
        />
      </div>

      <template v-if="isOffline">
        <div>
          <ConsultantMessage
            ref="offlineMessage"
            :message="offlineMessage"
            :is-follow="false"
            :download-url="downloadUrl"
            :chat-name="chatName"
            :isIE="isIE"
            @update-files="getFilesLink(message.fileItems)"
            @open-image="openImage($event, message)"
            @send-suggestion="sendSuggestion"
          >
            <ContactForm
              v-if="offlineFormConfigured"
              :config="offlineFormConfig"
              :handler="sendOfflineForm"
              :result-text="offlineModeResultText"
              :form-state="formState"
              :user="user"
              :personal-data-consent="personalDataConsent"
              :personal-data-link="personalDataLink"
              :country-code="detectedCountryCode"
              :isIE="isIE"
              @update-form-state="updateFormState"
            />
          </ConsultantMessage>
        </div>
      </template>

      <template v-else-if="needContactForm && isFirstMessageSet && contactFormDisplay === CONTACT_FORM_DISPLAY.AFTER_FIRST_MESSAGE">
        <div>
          <ConsultantMessage
            :message="contactFormMessage"
            :is-follow="false"
            :chat-name="chatName"
            :download-url="downloadUrl"
            :isIE="isIE"
          >
            <ContactForm
              :config="contactFormConfig"
              :handler="sendContactForm"
              :form-state="formState"
              :user="user"
              :country-code="detectedCountryCode"
              :isIE="isIE"
              :personal-data-consent="personalDataConsent"
              :personal-data-link="personalDataLink"
              @update-form-state="updateFormState"
            />
          </ConsultantMessage>
        </div>
      </template>

    </div>

    <div class="message-list__box" v-else-if="introText">
      <div>
        <ConsultantMessage
          :message="introMessage"
          :is-follow="false"
          :download-url="downloadUrl"
          :chat-name="chatName"
          :isIE="isIE"
          @update-files="getFilesLink(message.fileItems)"
          @open-image="openImage($event, message)"
          @send-suggestion="sendSuggestion"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import countryCode from 'country-telephone-data'
import { ApiClient } from '../api'
import EventBus from '../event/bus'
import * as MUTATIONS from '../store/mutations'
import { CONTACT_FORM_DISPLAY, DISPLAY_MANAGER_TYPE, DOWNLOAD_URL, MESSAGES_BACKEND_STATUS } from '../consts'

export default {
  data: function () {
    return {
      fileIdsInProcessOfGetLink: [],
      detectedCountryCode: '7'
    }
  },

  computed: {
    CONTACT_FORM_DISPLAY () {
      return CONTACT_FORM_DISPLAY
    },
    ...mapState({
      messages: state => state.data.messages,
      introText: state => state.config.introText,
      isOffline: state => state.behaviour.isOffline,
      offlineFormConfig: state => state.config.offlineForm,
      chatName: state => state.config.name,
      formState: state => state.behaviour.formState,
      user: state => state.config.user,
      isIE: state => state.config.isIE,
      displayManagerType: state => state.config.displayManagerType,
      personalDataConsent: state => state.config.personalDataConsent,
      personalDataLink: state => state.config.personalDataLink,
      contactFormDisplay: state => state.config.contactFormDisplay,
      isFirstMessageSet: state => state.data.messages.length > 0,
      managerUser: state => {
        return {
          first_name: state.config.managerName || '',
          avatar: state.config.managerLogo || ''
        }
      }
    }),
    ...mapGetters([
      'introMessage',
      'offlineMessage',
      'contactFormMessage',
      'needContactForm',
      'offlineModeResultText',
      'contactFormConfig'
    ]),

    downloadUrl: () => DOWNLOAD_URL
  },
  methods: {
    isFollowMessage: function (message, index) {
      const prevMsg = this.messages[index - 1]

      if (!prevMsg || message.fromMe !== prevMsg.fromMe) {
        return false
      }

      const currentMessageTime = new Date(message.time)
      const prevMessageTime = new Date(prevMsg.time)

      if (Math.abs(currentMessageTime.getTime() - prevMessageTime.getTime()) >= 300000) {
        return false
      }

      const currUser = message.user
      const prevUser = prevMsg.user

      if (currUser && prevUser && !message.fromMe && !prevMsg.fromMe &&
        (currUser.first_name !== prevUser.first_name ||
          currUser.last_name !== prevUser.last_name ||
          currUser.avatar !== prevUser.avatar)
      ) {
        return false
      }

      return true
    },

    isPrevDayMessage: function (message, index) {
      const prevMessageTime = new Date(this.messages[index - 1].time)
      let currentDayTime = new Date(message.time)

      currentDayTime.setHours(0)
      currentDayTime.setMinutes(0)
      currentDayTime.setSeconds(0)

      if (currentDayTime.getTime() - prevMessageTime.getTime() > 0) {
        return true
      }

      return false
    },

    offlineFormConfigured: function () {
      return this.offlineFormConfig.name !== undefined ||
        this.offlineFormConfig.email !== undefined ||
        this.offlineFormConfig.phone !== undefined ||
        this.offlineFormConfig.comment !== undefined ||
        this.offlineFormConfig.consent !== undefined
    },

    sendOfflineForm (data) {
      return this.$store.dispatch('sendOfflineForm', data)
    },

    sendContactForm (data) {
      return this.$store.dispatch('sendContactForm', data)
    },

    getFilesLink (files) {
      for (const f of files) {
        this.getFileLink(f)
      }
    },

    getFileLink (file) {
      const self = this
      if (!file.id || file.url || self.fileIdsInProcessOfGetLink.indexOf(file.id) !== -1) {
        return
      }

      self.fileIdsInProcessOfGetLink.push(file.id)

      ApiClient.api().doGet(`files/${file.id}`).then(resp => {
        self.$store.commit(MUTATIONS.UPDATE_FILE, {
          fileId: file.id,
          data: {
            url: resp.url
          }
        })
      }).finally(() => {
        this.fileIdsInProcessOfGetLink.splice(this.fileIdsInProcessOfGetLink.indexOf(file.id), 1)
      })
    },

    updateFormState (state) {
      this.$store.commit(MUTATIONS.CHANGE_CONTACT_FORM_STATE, state)
    },

    openImage (image, message) {
      if (!image.url || !message) {
        return
      }

      this.$store.commit(MUTATIONS.VIEW_IMAGE, {
        message: message,
        item: image
      })
    },

    sendSuggestion (content) {
      this.$store.dispatch('sendMessage', {content})
    },

    replaceManagerMessageUser (message) {
      if (this.displayManagerType === DISPLAY_MANAGER_TYPE.CUSTOM) {
        return { ...message, user: this.managerUser }
      }

      return message
    },

    visibilityMessage (isVisible, entry, message) {
      if (isVisible && !message.fromMe && message.status !== MESSAGES_BACKEND_STATUS.SEEN) {
        if (message.virtual) {
          this.$store.commit(
            MUTATIONS.UPDATE_MESSAGE,
            {id: message.id, data: {status: MESSAGES_BACKEND_STATUS.SEEN}}
          )
        } else {
          this.$store.dispatch('scheduleSetMessageSeen', message.id)
        }
      }
    }
  },
  mounted: function () {
    const self = this

    EventBus.$on('list-scroll', function () {
      const messagesList = self.$refs.messageList

      if (self.isOffline && messagesList) {
        const offlineMessage = self.$refs.offlineMessage && self.$refs.offlineMessage.$el
        messagesList.scrollTop = offlineMessage ? offlineMessage.offsetTop : messagesList.scrollHeight

        return
      }

      if (self.$refs.messages === undefined || !self.$refs.messages.length) {
        return
      }

      const lastMessage = self.$refs.messages[self.$refs.messages.length - 1]
      self.$refs.messageList.scrollTop = lastMessage.offsetTop
    })

    ApiClient.api().doGet(`geoip`)
      .then(
        data => {
          this.detectedCountryCode = (countryCode.allCountries.find(
            country =>
              (country.iso2 === data.code.toLowerCase())
          ) || {}).dialCode || ''
        })
  },

  beforeDestroy () {
    EventBus.$off('list-scroll')
  }
}
</script>

<style lang="less" scoped>
@import (reference) "~@message-gateway/consultant-ui-kit/src/assets/styles/global.less";

&, & * {
  box-sizing: border-box;
}

.message-list {
  flex: 1 0 1px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
  max-height: 100%;

  &__box {
    padding: 0 0 20px;
  }

  &__date {
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: @grey-800;
    margin: 16px 0;
  }
}
</style>



// WEBPACK FOOTER //
// src/components/MessagesList.vue