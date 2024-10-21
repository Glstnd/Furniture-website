<template>
  <div v-if="file" class="attach-files__item">
    <div v-if="isImage" class="attach-files__img-box">
      <img :src="item.url" class="attach-files__img" alt="">
    </div>
    <div v-else class="attach-files__img-box attach-files__img-box_file"></div>

    <div class="attach-files__content">
      <div class="attach-files__title">
        {{ file.name }}
      </div>
      <div class="attach-files__descript">
        {{ $formatFileSize(file.size) }}
      </div>
      <div class="attach-files__remove" @click="removeFile(item)"></div>
    </div>
  </div>
</template>

<script>

import {MESSAGE_TYPES} from '../../../consts'
import * as MUTATIONS from '../../../store/mutations'

export default {
  name: 'UploadDialogItem',
  props: [
    'item'
  ],
  computed: {
    file () {
      return this.item.file
    },
    isImage () {
      return this.item.type === MESSAGE_TYPES.IMAGE
    }
  },
  methods: {
    removeFile (item) {
      this.$store.commit(MUTATIONS.REMOVE_FILE, item)
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) "~@message-gateway/consultant-ui-kit/src/assets/styles/global.less";

.attach-files {
  &, * {
    box-sizing: border-box;
  }

  &__item {
    padding: 4px 10px 4px 16px;
    display: flex;
    width: 100%;
    transition: 0.25s ease;
  }

  &__img-box {
    width: 72px;
    min-width: 72px;
    height: 72px;
    border-radius: 3px;
    border: 4px solid @lightBlue;
    background-color: @darkWhite;
    position: relative;

    &_file::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 4px;
      background-color: @mainBlue;
      .attach-icon(white);
      .center-icon();
      background-size: 32px;
    }
  }

  &__img {
    width: 100%;
    min-height: 64px;
    border-radius: 4px;
    max-height: 64px;
    max-width: 64px;
    text-align: center;
  }

  &__content {
    padding-left: 12px;
    padding-right: 30px;
    width: 100%;
    max-width: calc(~"100% - 72px");
    position: relative;
  }

  &__title {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    margin-top: 14px;
    color: @mainBlue;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__descript {
    font-size: 12px;
    line-height: 18px;
    color: @gray5;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__remove {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    .remove-icon();
    .center-icon();
    background-size: 14px 16px;
    transition: 0.25s ease;

    &:hover {
      .remove-icon(@mainRed);
    }
  }
}
</style>



// WEBPACK FOOTER //
// src/components/Overlays/UploadDialog/UploadDialogItem.vue