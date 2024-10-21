<template>
  <ConsultantApp
    :opened="opened"
    :position="position"
    :offset-side="offset.side"
    :offset-bottom="offset.bottom"
    :loading="loading"
    :main-color="mainColor"
    :tooltip-text="tooltipText"
    :manager="manager"
    :messengers-links="messengers"
    :icons-color="linksMode"
    :domain-config="domainConfig"
    :domain="domainConfig.URL"
    :name="name"
    :isOffline="isOffline"
    :need-contact-form="needContactForm"
    :isMobile="isMobile"
    :show-messengers="showMessengers"
    :show-mobile-chat="isShowMobileChat"
    :inversion-color="inversionColor"
    :rounded="rounded"
    :theme="theme"
    :logo-link="logoLink"
    :is-ie="isIE"
    :personal-data-link="personalDataLink"
    :isFirstMessageSet="isFirstMessageSet"
    :contactFormDisplay="contactFormDisplay"
    @toggle-open="onToggleOpened"
    @send-message="sendMessage"
    @add-files="addFiles"
    @show-mobile-chat="$store.dispatch('changeVisibility')"
    @show-messengers="showMessengersBox"
    @hide-messengers="hideMessengersBox"
  >
    <MessagesList />
    <Overlays />
  </ConsultantApp>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import MessagesList from './MessagesList.vue'
import Overlays from './Overlays/Overlays'
import * as MUTATIONS from '../store/mutations'
import { LOGO_TYPE, LINKS_MODE } from '../consts'

const linkTypePrefixes = {
  fbmessenger: 'https://m.me/',
  whatsapp: 'https://wa.me/',
  viber: 'viber://pa?chatURI=',
  fb: 'https://fb.me/',
  instagram: 'https://instagram.com/',
  vk: 'https://vk.me/'
}

export default {
  components: { MessagesList, Overlays },
  computed: {
    ...mapState({
      opened: state => state.behaviour.opened,
      loading: state => state.behaviour.loading,
      position: state => state.config.position,
      offset: state => state.config.offset,
      mainColor: state => state.config.hexMainColor,
      domainConfig: state => ({ ...state.config.domainConfig }),
      // manager: state => state.data.manager ? ({ ...state.data.manager }) : null,
      name: state => state.config.name,
      isOffline: state => state.behaviour.isOffline,
      isMobile: state => state.config.isMobile,
      isExistMessengers: state => state.config.links.length > 0,
      isIE: state => state.config.isIE,
      inversionColor: state => state.config.inversionColor,
      rounded: state => state.config.rounded,
      theme: state => state.config.theme,
      linksMode: state => state.config.linksMode || LINKS_MODE.STANDARD,
      logoLink: state => {
        if (state.config.logoType === LOGO_TYPE.CUSTOM && state.config.logoUrl) {
          return state.config.logoUrl
        }

        return null
      },
      personalDataLink: state => state.config.personalDataLink,
      contactFormDisplay: state => state.config.contactFormDisplay,
      isFirstMessageSet: state => state.data.messages.length > 0,
      messengers (state) {
        if (state.config.links) {
          return [...state.config.links].map((link) => {
            if (link.type in linkTypePrefixes) {
              return { ...link, url: linkTypePrefixes[link.type] + link.url }
            }

            // Затрагивает пока что только Telegram, протокол там не хранится.
            if (link.prefix) {
              return { ...link, url: 'https://' + link.prefix + link.url }
            }

            return link
          })
        }

        return []
      },
      showMessengers (state) {
        if (state.config.always_show_links_on_desktops && !this.isMobile && !this.opened) {
          return true
        }

        return state.behaviour.showMessengers
      }
    }),
    ...mapGetters([
      'tooltipText',
      'countUnreadMessages',
      'manager',
      'useUnreadCounter',
      'needContactForm',
      'isShowMobileChat'
    ])
  },

  methods: {
    onToggleOpened () {
      if (this.isMobile && this.isExistMessengers && !this.opened) {
        this.$store.commit(MUTATIONS.TOGGLE_MESSENGERS)
      } else {
        this.$store.dispatch('changeVisibility')
      }
    },

    sendMessage (message) {
      this.$store.dispatch('sendMessage', { content: message })
    },

    addFiles (files) {
      this.$store.commit(MUTATIONS.ADD_FILES, files)
    },

    showMessengersBox: function (e) {
      if (!this.isMobile && !this.showMessengers && !this.opened) {
        this.$store.commit(MUTATIONS.TOGGLE_MESSENGERS)
      }
    },
    hideMessengersBox: function (e) {
      if (!this.isMobile && this.showMessengers) {
        this.$store.commit(MUTATIONS.TOGGLE_MESSENGERS)
      }
    }
  }
}
</script>



// WEBPACK FOOTER //
// src/components/App.vue