var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.file)?_c('div',{staticClass:"attach-files__item"},[(_vm.isImage)?_c('div',{staticClass:"attach-files__img-box"},[_c('img',{staticClass:"attach-files__img",attrs:{"src":_vm.item.url,"alt":""}})]):_c('div',{staticClass:"attach-files__img-box attach-files__img-box_file"}),_vm._v(" "),_c('div',{staticClass:"attach-files__content"},[_c('div',{staticClass:"attach-files__title"},[_vm._v("\n      "+_vm._s(_vm.file.name)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"attach-files__descript"},[_vm._v("\n      "+_vm._s(_vm.$formatFileSize(_vm.file.size))+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"attach-files__remove",on:{"click":function($event){return _vm.removeFile(_vm.item)}}})])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
export default esExports


//////////////////
// WEBPACK FOOTER
// ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e4060e98","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Overlays/UploadDialog/UploadDialogItem.vue
// module id = null
// module chunks = 