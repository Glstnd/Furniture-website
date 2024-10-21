<template>
  <div v-if="files.length > 0" class="mg-popup-wrap">
    <div class="mg-popup mg-popup_files">
      <div class="mg-popup__head">
        <h3 class="mg-popup__title">
          {{ $t('files.attach') }}
        </h3>
        <div class="mg-popup__close" @click="close"></div>
      </div>

      <div class="attach-files">
        <UploadDialogItem v-for="(file, index) in files" :key="index" :item="file" />
      </div>

      <div>
        <div class="msg-input-wrap msg-input-wrap_popup">
          <div class="msg-input msg-input_popup">
            <div class="mg-popup_files__summary">
              {{ $t('files.count', {count: summary.count}, summary.count) }}, {{ $formatFileSize(summary.size) }}
            </div>
          </div>
          <div class="msg-input-buttons">
            <span
              class="gw-btn-input gw-btn-input_send gw-btn-input_is-next"
              @click.prevent="sendFiles"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import UploadDialogItem from './UploadDialogItem'
import * as MUTATIONS from '../../../store/mutations'
import { mapState } from 'vuex'

export default {
  name: 'UploadDialog',
  components: {
    UploadDialogItem
  },
  methods: {
    close () {
      this.$store.commit(MUTATIONS.CLEAR_FILES)
    },
    sendFiles () {
      this.$store.dispatch('sendFiles')
    }
  },
  computed: {
    files () {
      return this.$store.state.behaviour.uploadDialog.files
    },
    summary () {
      let count = 0
      let size = 0

      for (const f of this.files) {
        ++count
        size += f.file.size
      }

      return {count, size}
    },
    ...mapState({
      isMobile: state => state.config.isMobile
    })
  },
  watch: {
    files (newFiles) {
      if (this.isMobile && newFiles.length) {
        this.sendFiles()
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) "~@message-gateway/consultant-ui-kit/src/assets/styles/global.less";

.attach-files {
  height: 300px;
  overflow: auto;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
}

.mg-popup {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;

  &__head {
    border-bottom: 1px solid @lightGrayBorder;
    padding: 16px 70px 16px 16px;
    position: relative;
  }

  &__content {
    min-height: 298px;
    position: relative;
  }

  &__title {
    font-size: 18px;
    line-height: 22px;
    color: @lightBlack;
    font-weight: 400;
    margin: 0;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 54px;
    height: 54px;
    border-top-right-radius: 3px;
    border-left: 1px solid @lightGrayBorder;
    .popup-close-icon(@gray2);
    .center-icon();
    background-size: 20px;
    transition: 0.25s ease;

    &:hover {
      background-color: @darkWhite;
      .popup-close-icon(@mainRed);
    }
  }

  &_files {
    max-width: 400px;

    &__summary {
      font-size: 14px;
      color: #777;
      cursor: default;
    }
  }

  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    &_hidden {
      display: none;
    }
  }
}

.msg-input {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  &_popup {
    padding-right: 0;
  }

  &-wrap {
    height: auto;
    padding: 12px 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid @lightGray;

    &_popup {
      flex-wrap: nowrap;
    }
  }

  &-buttons {
    display: flex;
    align-items: flex-end;
    max-width: 105px;
    font-size: 0;
  }

  &-box {
    width: 100%;
    display: flex;
  }

  &-edit {
    width: 100%;
  }
}

.gw-btn {
  display: inline-block;
  vertical-align: top;

  &-input {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 16px;
    width: 24px;
    height: 24px;
    transition: 0.25s ease;
    .center-icon;

    &:nth-child(1) {
      margin-left: 0;
    }

    &_send {
      align-self: flex-end;
      .send-msg-icon();
      margin-left: 0;
    }

    &_is-next {
      margin-left: 16px;
    }
  }
}

</style>



// WEBPACK FOOTER //
// src/components/Overlays/UploadDialog/UploadDialog.vue