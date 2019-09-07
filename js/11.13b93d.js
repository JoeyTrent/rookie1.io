webpackJsonp([11],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDesc_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDesc_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDesc_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDesc_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDesc_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33995ae4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoodsDesc_vue__ = __webpack_require__(342);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(340)
}
var normalizeComponent = __webpack_require__(12)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33995ae4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDesc_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33995ae4_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoodsDesc_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/goods/GoodsDesc.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33995ae4", Component.options)
  } else {
    hotAPI.reload("data-v-33995ae4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 294:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            info: {
                title: 'Celia',
                content: '<p>celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona</p>  <img src = "./src/images/hmbb6.jpg"><p>celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia shona celia</p>'
            }
        };
    },
    created: function created() {
        this.getGoodsDesc();
    },

    methods: {
        getGoodsDesc: function getGoodsDesc() {
            var _this = this;

            this.$http.get('api/goods/getdesc' + this.$route.params.id).then(function (result) {
                if (result.body.status === 0) {
                    _this.info = result.body.message[0];
                }
            });
        }
    }
};

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(341);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("2a600c58", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33995ae4\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GoodsDesc.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33995ae4\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GoodsDesc.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.goodsdesc-container[data-v-33995ae4] {\n  padding: 6px;\n}\n.goodsdesc-container h3[data-v-33995ae4] {\n    font-size: 16px;\n    color: #226aff;\n    text-align: center;\n    margin: 15px 0;\n}\n.goodsdesc-container .content img[data-v-33995ae4] {\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "goodsdesc-container" }, [
    _c("h3", [_vm._v(_vm._s(_vm.info.title))]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", {
      staticClass: "content",
      domProps: { innerHTML: _vm._s(_vm.info.content) }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33995ae4", esExports)
  }
}

/***/ })

});