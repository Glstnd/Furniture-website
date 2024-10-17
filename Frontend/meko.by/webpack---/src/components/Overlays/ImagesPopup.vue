<template>
  <transition v-if="popup && popup.item" name="slide-fade">
    <div
      class="images-popup"
      @click="closePopup"
      @wheel.prevent
    >
      <div
        class="images-popup__img-box"
      >
        <transition name="slide-image">
          <img
            :src="popup.item.url"
            :key="imageKey"
            class="images-popup__img"
            alt=""
            @click.stop
          >
        </transition>
      </div>
      <div
        v-if="prevPopup"
        class="images-popup__arrow images-popup__arrow_prev"
        @click.stop="goImage(prevPopup)"
      ></div>
      <div
        v-if="nextPopup"
        class="images-popup__arrow images-popup__arrow_next"
        @click.stop="goImage(nextPopup)"
      ></div>
    </div>
  </transition>
</template>

<script>

import {MESSAGE_TYPES} from './../../consts'
import * as MUTATIONS from './../../store/mutations'

export default {
  name: 'ImagesPopup',
  data: function () {
    return {
      images: [],
      lastDeltaX: 0,
      lastUp: false,
      directionRight: false
    }
  },
  methods: {
    goImage (popupParams) {
      if (popupParams) {
        this.$store.commit(MUTATIONS.VIEW_IMAGE, popupParams)
      }
    },
    findImage (direction) {
      const p = this.popup

      if (!p) {
        return null
      }

      const msg = p.message
      if (msg) {
        const i = this.imageIndex + direction
        const fs = msg.fileItems

        // в рамках одного сообщения
        if (i >= 0 && i < fs.length) {
          return {
            message: msg,
            item: fs[i]
          }
        }

        const messages = this.$store.state.data.messages

        if (messages.length > 0) {
          let prev = null
          let next = null
          let found = false

          for (const m of messages) {
            if (found && m.type === MESSAGE_TYPES.IMAGE) {
              next = m
              break
            }

            if (m === msg) {
              found = true
              if (i < 0) {
                break
              }
            }

            if (!found && m.type === MESSAGE_TYPES.IMAGE) {
              prev = m
            }
          }

          if (i < 0 && prev) {
            next = prev
          }

          if (next) {
            return {
              message: next,
              item: next.fileItems[i < 0 ? next.fileItems.length - 1 : 0]
            }
          }
        }
      }

      return null
    },
    closePopup () {
      this.$store.commit(MUTATIONS.CLOSE_IMAGE_VIEW)
    }
  },
  watch: {
    directionRight (o, n) {
      if (this.lastUp) {
        this.goImage(n ? this.nextPopup : this.prevPopup)
      }
    },
    lastUp (o, n) {
      if (!o && n) {
        this.goImage(this.directionRight ? this.nextPopup : this.prevPopup)
      }
    }
  },
  computed: {
    prevPopup () {
      return this.findImage(-1)
    },

    nextPopup () {
      return this.findImage(1)
    },
    imageKey () {
      const p = this.popup

      if (!p) {
        return null
      }

      let result = p.item.id

      if (p.message) {
        result += this.imageIndex + '-' + p.message.id
      }

      return result
    },
    imageIndex () {
      const p = this.popup

      if (!p) {
        return 0
      }

      const msg = p.message
      if (!msg) {
        return 0
      }

      let rez = 0

      for (const i of msg.fileItems) {
        if (i === p.item) {
          break
        }
        ++rez
      }

      return rez
    },
    popup () {
      return this.$store.state.behaviour.imagesPopup
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) "~@message-gateway/consultant-ui-kit/src/assets/styles/global.less";

.images-popup {
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  &__img-box {
    width: 100%;
    height: 100%;
  }

  &__img {
    max-height: 90vh;
    max-width: 80vw !important;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  &__arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &::before, &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 15px;
      height: 4px;
      background: white;
      transform-origin: 0 50%;
      border-radius: 0 3px 3px 0;
      transition: background 0.2s linear;
    }

    &::before {
      transform: rotate(-45deg) translateY(1px);
    }

    &::after {
      transform: rotate(45deg) translateY(-1px);
    }

    &:hover::before, &:hover::after {
      background: @lightGrayBtn
    }

    &_prev {
      left: 20px;
    }

    &_next {
      right: 20px;
      transform: rotate(-180deg)
    }
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &::before, &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      background: white;
      width: 6px;
      height: 24px;
      border-radius: 4px;
      transition: background 0.2s linear;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

    &:hover::before, &:hover::after {
      background: @lightGrayBtn;
    }
  }
}

.slide-fade-enter-active {
  transition: all .2s linear;
}

.slide-fade-leave-active {
  transition: all .2s linear;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

.slide-image-enter-active {
  transition: all .2s linear;
}

.slide-image-leave-active {
  transition: all .3s linear .04s;
}

.slide-image-enter, .slide-image-leave-to {
  opacity: 0;
}
</style>



// WEBPACK FOOTER //
// src/components/Overlays/ImagesPopup.vue