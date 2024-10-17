var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.popup && _vm.popup.item)?_c('transition',{attrs:{"name":"slide-fade"}},[_c('div',{staticClass:"images-popup",on:{"click":_vm.closePopup,"wheel":function($event){$event.preventDefault();}}},[_c('div',{staticClass:"images-popup__img-box"},[_c('transition',{attrs:{"name":"slide-image"}},[_c('img',{key:_vm.imageKey,staticClass:"images-popup__img",attrs:{"src":_vm.popup.item.url,"alt":""},on:{"click":function($event){$event.stopPropagation();}}})])],1),_vm._v(" "),(_vm.prevPopup)?_c('div',{staticClass:"images-popup__arrow images-popup__arrow_prev",on:{"click":function($event){$event.stopPropagation();return _vm.goImage(_vm.prevPopup)}}}):_vm._e(),_vm._v(" "),(_vm.nextPopup)?_c('div',{staticClass:"images-popup__arrow images-popup__arrow_next",on:{"click":function($event){$event.stopPropagation();return _vm.goImage(_vm.nextPopup)}}}):_vm._e()])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
export default esExports


//////////////////
// WEBPACK FOOTER
// ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f43a909a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Overlays/ImagesPopup.vue
// module id = null
// module chunks = 