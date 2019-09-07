webpackJsonp([10],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Goodslist_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Goodslist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Goodslist_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Goodslist_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Goodslist_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_142a5c0a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Goodslist_vue__ = __webpack_require__(332);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(330)
}
var normalizeComponent = __webpack_require__(12)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-142a5c0a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Goodslist_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_142a5c0a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Goodslist_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/goods/Goodslist.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-142a5c0a", Component.options)
  } else {
    hotAPI.reload("data-v-142a5c0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 291:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            pageindex: 1,
            goodslist: [{
                id: 0,
                title: 'Celia',
                add_time: '2019-09-03T09:09:09.000Z',
                zhaoyao: 'Celia',
                click: 0,
                img_url: './src/images/hmbb.jpg',
                sell_price: 2196,
                market_price: 2499,
                stock_quantity: 7
            }, {
                id: 1,
                title: 'shona',
                add_time: '2019-09-03T09:09:09.000Z',
                zhaoyao: 'Celia',
                click: 0,
                img_url: './src/images/hmbb2.jpg',
                sell_price: 2196,
                market_price: 2499,
                stock_quantity: 8
            }, {
                id: 2,
                title: 'joey',
                add_time: '2019-09-03T09:09:09.000Z',
                zhaoyao: 'Celia',
                click: 0,
                img_url: './src/images/hmbb3.jpg',
                sell_price: 2196,
                market_price: 2499,
                stock_quantity: 9
            }, {
                id: 3,
                title: 'trent',
                add_time: '2019-09-03T09:09:09.000Z',
                zhaoyao: 'Celia',
                click: 0,
                img_url: './src/images/hmbb4.jpg',
                sell_price: 2196,
                market_price: 2499,
                stock_quantity: 10
            }, {
                id: 4,
                title: 'trent',
                add_time: '2019-09-03T09:09:09.000Z',
                zhaoyao: 'Celia',
                click: 0,
                img_url: './src/images/hmbb5.jpg',
                sell_price: 2196,
                market_price: 2499,
                stock_quantity: 10
            }, {
                id: 5,
                title: 'trent',
                add_time: '2019-09-03T09:09:09.000Z',
                zhaoyao: 'Celia',
                click: 0,
                img_url: './src/images/hmbb6.jpg',
                sell_price: 2196,
                market_price: 2499,
                stock_quantity: 10
            }, {
                id: 6,
                title: 'trent',
                add_time: '2019-09-03T09:09:09.000Z',
                zhaoyao: 'Celia',
                click: 0,
                img_url: './src/images/hmbb7.jpg',
                sell_price: 2196,
                market_price: 2499,
                stock_quantity: 10
            }]
        };
    },
    created: function created() {
        this.getGoodslist();
    },

    methods: {
        getGoodslist: function getGoodslist() {
            var _this = this;

            this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(function (result) {
                if (result.body.status === 0) {
                    _this.goodslist = _this.goodslist.concat(result.body.message);
                }
            });
        },
        getMoreGoods: function getMoreGoods() {
            this.pageindex++;
            this.getGoodslist();
        },
        getDetail: function getDetail(id) {
            // this.$router.push({ path:"goodsinfo/" + id })
            this.$router.push({
                name: "goodsinfo", //
                params: { id: id }
            });
        }
    }
};

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("285b0aa2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-142a5c0a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Goodslist.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-142a5c0a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Goodslist.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.goods-list[data-v-142a5c0a] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 7px;\n  justify-content: space-between;\n}\n.goods-list .goods-item[data-v-142a5c0a] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 2px;\n    min-height: 220px;\n    width: 49%;\n    border: 1px solid #ccc;\n    box-shadow: 0 0 8px #ccc;\n    margin: 3px 0;\n}\n.goods-list .goods-item img[data-v-142a5c0a] {\n      width: 100%;\n}\n.goods-list .goods-item .title[data-v-142a5c0a] {\n      font-size: 14px;\n      margin-left: 10px;\n}\n.goods-list .goods-item .info[data-v-142a5c0a] {\n      background-color: #eee;\n}\n.goods-list .goods-item .info p[data-v-142a5c0a] {\n        margin: 0;\n        padding: 5px;\n}\n.goods-list .goods-item .info .price .now[data-v-142a5c0a] {\n        color: red;\n        font-weight: blod;\n        font-size: 16px;\n}\n.goods-list .goods-item .info .price .old[data-v-142a5c0a] {\n        font-size: 12px;\n        margin-left: 15px;\n        text-decoration: line-through;\n}\n.goods-list .goods-item .info .sell[data-v-142a5c0a] {\n        display: flex;\n        justify-content: space-between;\n}\n", ""]);

// exports


/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "goods-list" },
    [
      _vm._l(_vm.goodslist, function(item) {
        return _c(
          "div",
          {
            key: item.id,
            staticClass: "goods-item",
            on: {
              click: function($event) {
                return _vm.getDetail(item.id)
              }
            }
          },
          [
            _c("img", { attrs: { src: item.img_url, alt: "" } }),
            _vm._v(" "),
            _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(item.title))]),
            _vm._v(" "),
            _c("div", { staticClass: "info" }, [
              _c("p", { staticClass: "price" }, [
                _c("span", { staticClass: "now" }, [
                  _vm._v("￥" + _vm._s(item.sell_price))
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "old" }, [
                  _vm._v("￥" + _vm._s(item.market_price))
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "sell" }, [
                _c("span", [_vm._v("热卖中")]),
                _vm._v(" "),
                _c("span", [_vm._v("剩" + _vm._s(item.stock_quantity) + "件")])
              ])
            ])
          ]
        )
      }),
      _vm._v(" "),
      _c(
        "mt-button",
        {
          attrs: { type: "danger", size: "large" },
          on: { click: _vm.getMoreGoods }
        },
        [_vm._v("加载更多")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-142a5c0a", esExports)
  }
}

/***/ })

});