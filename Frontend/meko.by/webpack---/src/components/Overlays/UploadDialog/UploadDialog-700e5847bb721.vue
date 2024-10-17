var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.files.length > 0)?_c('div',{staticClass:"mg-popup-wrap"},[_c('div',{staticClass:"mg-popup mg-popup_files"},[_c('div',{staticClass:"mg-popup__head"},[_c('h3',{staticClass:"mg-popup__title"},[_vm._v("\n        "+_vm._s(_vm.$t('files.attach'))+"\n      ")]),_vm._v(" "),_c('div',{staticClass:"mg-popup__close",on:{"click":_vm.close}})]),_vm._v(" "),_c('div',{staticClass:"attach-files"},_vm._l((_vm.files),function(file,index){return _c('UploadDialogItem',{key:index,attrs:{"item":file}})}),1),_vm._v(" "),_c('div',[_c('div',{staticClass:"msg-input-wrap msg-input-wrap_popup"},[_c('div',{staticClass:"msg-input msg-input_popup"},[_c('div',{staticClass:"mg-popup_files__summary"},[_vm._v("\n            "+_vm._s(_vm.$t('files.count', {count: _vm.summary.count}, _vm.summary.count))+", "+_vm._s(_vm.$formatFileSize(_vm.summary.size))+"\n          ")])]),_vm._v(" "),_c('div',{staticClass:"msg-input-buttons"},[_c('span',{staticClass:"gw-btn-input gw-btn-input_send gw-btn-input_is-next",on:{"click":function($event){$event.preventDefault();return _vm.sendFiles.apply(null, arguments)}}})])])])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
export default esExports


//////////////////
// WEBPACK FOOTER
// ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a6cf7b92","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Overlays/UploadDialog/UploadDialog.vue
// module id = null
// module chunks = 