"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./view/charity/index.tsx":
/*!********************************!*\
  !*** ./view/charity/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Charity: function() { return /* binding */ Charity; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/popover/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/row/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/col/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/table/index.js\");\n/* harmony import */ var _components_pagetitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pagetitle */ \"(app-pages-browser)/./components/pagetitle.tsx\");\n/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/button */ \"(app-pages-browser)/./components/common/button.tsx\");\n/* harmony import */ var _components_common_graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/graph */ \"(app-pages-browser)/./components/common/graph.tsx\");\n/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/input */ \"(app-pages-browser)/./components/form/input.tsx\");\n/* harmony import */ var _components_common_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/tag */ \"(app-pages-browser)/./components/common/tag.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst onChange = (pagination, filters, sorter, extra)=>{\n    console.log(\"params\", pagination, filters, sorter, extra);\n};\nconst Charity = ()=>{\n    _s();\n    const [openPopoverIndex, setOpenPopoverIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePopoverOpen = (index)=>{\n        setOpenPopoverIndex(index === openPopoverIndex ? null : index);\n    };\n    const columns = [\n        {\n            title: \"Date\",\n            dataIndex: \"date\"\n        },\n        {\n            title: \"Category\",\n            dataIndex: \"category\"\n        },\n        {\n            title: \"Amount\",\n            dataIndex: \"amount\",\n            sorter: {\n                compare: (a, b)=>a.math - b.math,\n                multiple: 2\n            }\n        },\n        {\n            title: \"Organisation\",\n            dataIndex: \"organisation\"\n        },\n        {\n            title: \"Status\",\n            dataIndex: \"status\"\n        },\n        {\n            title: \"\",\n            dataIndex: \"\",\n            key: \"x\",\n            render: (text, record, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"130px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>handlePopoverOpen(index),\n                                style: {\n                                    display: \"block\",\n                                    marginBottom: \"12px\"\n                                },\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>handlePopoverOpen(index),\n                                style: {\n                                    display: \"block\"\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, void 0)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, void 0),\n                    trigger: \"click\",\n                    visible: openPopoverIndex === index,\n                    onVisibleChange: (visible)=>{\n                        if (!visible) {\n                            setOpenPopoverIndex(null);\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                        text: \"\",\n                        variant: \"info\",\n                        onClick: ()=>handlePopoverOpen(index)\n                    }, void 0, false, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n        }\n    ];\n    const data = [\n        {\n            key: \"3\",\n            date: \"07/12/2023\",\n            category: \"Food\",\n            amount: 322332,\n            organisation: \"Keto India\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_tag__WEBPACK_IMPORTED_MODULE_6__.CustomTag, {\n                variant: \"success\",\n                title: \"Completed\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 108,\n                columnNumber: 15\n            }, undefined)\n        },\n        {\n            key: \"4\",\n            date: \"03/11/2023\",\n            category: \"Food\",\n            amount: 2323,\n            organisation: \"Keto India\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_tag__WEBPACK_IMPORTED_MODULE_6__.CustomTag, {\n                variant: \"success\",\n                title: \"Completed\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 116,\n                columnNumber: 15\n            }, undefined)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"common-panel-wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    justify: \"space-between\",\n                    style: {\n                        alignItems: \"center\"\n                    },\n                    className: \"p-15\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            span: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagetitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: \"Charity\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            span: 12,\n                            style: {\n                                textAlign: \"right\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                                text: \"Add Data\",\n                                variant: \"primary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gray-box p-15\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        gutter: [\n                            0,\n                            12\n                        ],\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                span: 24,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_graph__WEBPACK_IMPORTED_MODULE_4__.DisplayGraph, {}, void 0, false, {\n                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                span: 24,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        background: \"#fff\",\n                                        padding: \"15px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            gutter: [\n                                                0,\n                                                24\n                                            ],\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    span: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_input__WEBPACK_IMPORTED_MODULE_5__.FormInput, {\n                                                        type: \"search\",\n                                                        placeholder: \"Search\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                        lineNumber: 144,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                    lineNumber: 143,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    span: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"form-group\",\n                                                        style: {\n                                                            marginBottom: \"0\",\n                                                            display: \"flex\",\n                                                            alignItems: \"center\"\n                                                        },\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                                htmlFor: \"filter\",\n                                                                children: \"Filter by\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                                lineNumber: 155,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_input__WEBPACK_IMPORTED_MODULE_5__.FormInput, {\n                                                                type: \"search\",\n                                                                placeholder: \"Search\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                                lineNumber: 156,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                        lineNumber: 147,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                    lineNumber: 146,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                    span: 6,\n                                                    children: \"1\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                    lineNumber: 159,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            columns: columns,\n                                            dataSource: data,\n                                            onChange: onChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                            lineNumber: 162,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n            lineNumber: 121,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Charity, \"RLPZb09VIMkgl88btsKOehXTauA=\");\n_c = Charity;\nvar _c;\n$RefreshReg$(_c, \"Charity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3ZpZXcvY2hhcml0eS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1E7QUFFRztBQUNZO0FBQ0Y7QUFDTDtBQUNBO0FBYXhELE1BQU1XLFdBQTZDLENBQ2pEQyxZQUNBQyxTQUNBQyxRQUNBQztJQUVBQyxRQUFRQyxHQUFHLENBQUMsVUFBVUwsWUFBWUMsU0FBU0MsUUFBUUM7QUFDckQ7QUFFTyxNQUFNRyxVQUFVOztJQUNyQixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUduQiwrQ0FBUUEsQ0FBZ0I7SUFFeEUsTUFBTW9CLG9CQUFvQixDQUFDQztRQUN6QkYsb0JBQW9CRSxVQUFVSCxtQkFBbUIsT0FBT0c7SUFDMUQ7SUFDQSxNQUFNQyxVQUFpQztRQUNyQztZQUNFQyxPQUFPO1lBQ1BDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztRQUNiO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxXQUFXO1lBQ1hYLFFBQVE7Z0JBQ05ZLFNBQVMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsSUFBSSxHQUFHRCxFQUFFQyxJQUFJO2dCQUNsQ0MsVUFBVTtZQUNaO1FBQ0Y7UUFDQTtZQUNFTixPQUFPO1lBQ1BDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztRQUNiO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxXQUFXO1lBQ1hNLEtBQUs7WUFDTEMsUUFBUSxDQUFDQyxNQUFNQyxRQUFRWixzQkFDckIsOERBQUNqQix5RkFBT0E7b0JBQ044Qix1QkFDRSw4REFBQ0M7d0JBQUlDLE9BQU87NEJBQUVDLE9BQU87NEJBQVNDLFNBQVM7d0JBQU07OzBDQUMzQyw4REFBQ0M7Z0NBQ0NDLFNBQVMsSUFBTXBCLGtCQUFrQkM7Z0NBQ2pDZSxPQUFPO29DQUFFSyxTQUFTO29DQUFTQyxjQUFjO2dDQUFPOzBDQUNqRDs7Ozs7OzBDQUdELDhEQUFDSDtnQ0FDQ0MsU0FBUyxJQUFNcEIsa0JBQWtCQztnQ0FDakNlLE9BQU87b0NBQUVLLFNBQVM7Z0NBQVE7MENBQzNCOzs7Ozs7Ozs7Ozs7b0JBS0xFLFNBQVE7b0JBQ1JDLFNBQVMxQixxQkFBcUJHO29CQUM5QndCLGlCQUFpQixDQUFDRDt3QkFDaEIsSUFBSSxDQUFDQSxTQUFTOzRCQUNaekIsb0JBQW9CO3dCQUN0QjtvQkFDRjs4QkFFQSw0RUFBQ2Isb0VBQWFBO3dCQUNaMEIsTUFBSzt3QkFDTGMsU0FBUTt3QkFDUk4sU0FBUyxJQUFNcEIsa0JBQWtCQzs7Ozs7Ozs7Ozs7UUFJekM7S0FDRDtJQUVELE1BQU0wQixPQUFtQjtRQUN2QjtZQUNFakIsS0FBSztZQUNMa0IsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsY0FBYztZQUNkQyxzQkFBUSw4REFBQzNDLDZEQUFTQTtnQkFBQ3FDLFNBQVE7Z0JBQVV2QixPQUFNOzs7Ozs7UUFDN0M7UUFDQTtZQUNFTyxLQUFLO1lBQ0xrQixNQUFNO1lBQ05DLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxjQUFjO1lBQ2RDLHNCQUFRLDhEQUFDM0MsNkRBQVNBO2dCQUFDcUMsU0FBUTtnQkFBVXZCLE9BQU07Ozs7OztRQUM3QztLQUNEO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNZO1lBQUlrQixXQUFVOzs4QkFFYiw4REFBQ25ELHlGQUFHQTtvQkFDRm9ELFNBQVM7b0JBQ1RsQixPQUFPO3dCQUFFbUIsWUFBWTtvQkFBUztvQkFDOUJGLFdBQVU7O3NDQUVWLDhEQUFDcEQseUZBQUdBOzRCQUFDc0MsTUFBTTtzQ0FDVCw0RUFBQ2xDLDZEQUFTQTtnQ0FBQ2tCLE9BQU07Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ3RCLHlGQUFHQTs0QkFBQ3NDLE1BQU07NEJBQUlILE9BQU87Z0NBQUVvQixXQUFXOzRCQUFRO3NDQUN6Qyw0RUFBQ2xELG9FQUFhQTtnQ0FBQzBCLE1BQUs7Z0NBQVdjLFNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUczQyw4REFBQ1g7b0JBQUlrQixXQUFVOzhCQUNiLDRFQUFDbkQseUZBQUdBO3dCQUFDdUQsUUFBUTs0QkFBQzs0QkFBRzt5QkFBRzs7MENBQ2xCLDhEQUFDeEQseUZBQUdBO2dDQUFDc0MsTUFBTTswQ0FDVCw0RUFBQ2hDLGtFQUFZQTs7Ozs7Ozs7OzswQ0FFZiw4REFBQ04seUZBQUdBO2dDQUFDc0MsTUFBTTswQ0FDVCw0RUFBQ0o7b0NBQUlDLE9BQU87d0NBQUVzQixZQUFZO3dDQUFRcEIsU0FBUztvQ0FBTzs7c0RBQ2hELDhEQUFDcEMseUZBQUdBOzRDQUFDdUQsUUFBUTtnREFBQztnREFBRzs2Q0FBRzs7OERBQ2xCLDhEQUFDeEQseUZBQUdBO29EQUFDc0MsTUFBTTs4REFDVCw0RUFBQy9CLDZEQUFTQTt3REFBQ21ELE1BQUs7d0RBQVNDLGFBQVk7Ozs7Ozs7Ozs7OzhEQUV2Qyw4REFBQzNELHlGQUFHQTtvREFBQ3NDLE1BQU07OERBQ1QsNEVBQUNKO3dEQUNDa0IsV0FBVTt3REFDVmpCLE9BQU87NERBQ0xNLGNBQWM7NERBQ2RELFNBQVM7NERBQ1RjLFlBQVk7d0RBQ2Q7OzBFQUVBLDhEQUFDTTtnRUFBTUMsU0FBUTswRUFBUzs7Ozs7OzBFQUN4Qiw4REFBQ3RELDZEQUFTQTtnRUFBQ21ELE1BQUs7Z0VBQVNDLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUd6Qyw4REFBQzNELHlGQUFHQTtvREFBQ3NDLE1BQU07OERBQUc7Ozs7Ozs7Ozs7OztzREFHaEIsOERBQUNwQywwRkFBS0E7NENBQ0ptQixTQUFTQTs0Q0FDVHlDLFlBQVloQjs0Q0FDWnJDLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QixFQUFFO0dBaEpXTztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi92aWV3L2NoYXJpdHkvaW5kZXgudHN4Pzg4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBSb3csIFRhYmxlLCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdldGl0bGUnO1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbic7XG5pbXBvcnQgeyBEaXNwbGF5R3JhcGggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9ncmFwaCc7XG5pbXBvcnQgeyBGb3JtSW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm0vaW5wdXQnO1xuaW1wb3J0IHsgQ3VzdG9tVGFnIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vdGFnJztcbmltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUsIFRhYmxlUHJvcHMgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcblxuaW50ZXJmYWNlIERhdGFUeXBlIHtcbiAgW3g6IHN0cmluZ106IGFueTtcbiAga2V5OiBSZWFjdC5LZXk7XG4gIGRhdGU6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIG9yZ2FuaXNhdGlvbjogc3RyaW5nO1xuICBzdGF0dXM6IGFueTtcbn1cblxuY29uc3Qgb25DaGFuZ2U6IFRhYmxlUHJvcHM8RGF0YVR5cGU+WydvbkNoYW5nZSddID0gKFxuICBwYWdpbmF0aW9uLFxuICBmaWx0ZXJzLFxuICBzb3J0ZXIsXG4gIGV4dHJhXG4pID0+IHtcbiAgY29uc29sZS5sb2coJ3BhcmFtcycsIHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlciwgZXh0cmEpO1xufTtcblxuZXhwb3J0IGNvbnN0IENoYXJpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuUG9wb3ZlckluZGV4LCBzZXRPcGVuUG9wb3ZlckluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVBvcG92ZXJPcGVuID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRPcGVuUG9wb3ZlckluZGV4KGluZGV4ID09PSBvcGVuUG9wb3ZlckluZGV4ID8gbnVsbCA6IGluZGV4KTtcbiAgfTtcbiAgY29uc3QgY29sdW1uczogQ29sdW1uc1R5cGU8RGF0YVR5cGU+ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRGF0ZScsXG4gICAgICBkYXRhSW5kZXg6ICdkYXRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ2F0ZWdvcnknLFxuICAgICAgZGF0YUluZGV4OiAnY2F0ZWdvcnknLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBbW91bnQnLFxuICAgICAgZGF0YUluZGV4OiAnYW1vdW50JyxcbiAgICAgIHNvcnRlcjoge1xuICAgICAgICBjb21wYXJlOiAoYSwgYikgPT4gYS5tYXRoIC0gYi5tYXRoLFxuICAgICAgICBtdWx0aXBsZTogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ09yZ2FuaXNhdGlvbicsXG4gICAgICBkYXRhSW5kZXg6ICdvcmdhbmlzYXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdTdGF0dXMnLFxuICAgICAgZGF0YUluZGV4OiAnc3RhdHVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRhdGFJbmRleDogJycsXG4gICAgICBrZXk6ICd4JyxcbiAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IChcbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMzBweCcsIHBhZGRpbmc6ICc1cHgnIH19PlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvcG92ZXJPcGVuKGluZGV4KX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICcxMnB4JyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9wb3Zlck9wZW4oaW5kZXgpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZ2dlcj0nY2xpY2snXG4gICAgICAgICAgdmlzaWJsZT17b3BlblBvcG92ZXJJbmRleCA9PT0gaW5kZXh9XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXsodmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgIHNldE9wZW5Qb3BvdmVySW5kZXgobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICB0ZXh0PScnXG4gICAgICAgICAgICB2YXJpYW50PSdpbmZvJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9wb3Zlck9wZW4oaW5kZXgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBkYXRhOiBEYXRhVHlwZVtdID0gW1xuICAgIHtcbiAgICAgIGtleTogJzMnLFxuICAgICAgZGF0ZTogJzA3LzEyLzIwMjMnLFxuICAgICAgY2F0ZWdvcnk6ICdGb29kJyxcbiAgICAgIGFtb3VudDogMzIyMzMyLFxuICAgICAgb3JnYW5pc2F0aW9uOiAnS2V0byBJbmRpYScsXG4gICAgICBzdGF0dXM6IDxDdXN0b21UYWcgdmFyaWFudD0nc3VjY2VzcycgdGl0bGU9J0NvbXBsZXRlZCcgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICc0JyxcbiAgICAgIGRhdGU6ICcwMy8xMS8yMDIzJyxcbiAgICAgIGNhdGVnb3J5OiAnRm9vZCcsXG4gICAgICBhbW91bnQ6IDIzMjMsXG4gICAgICBvcmdhbmlzYXRpb246ICdLZXRvIEluZGlhJyxcbiAgICAgIHN0YXR1czogPEN1c3RvbVRhZyB2YXJpYW50PSdzdWNjZXNzJyB0aXRsZT0nQ29tcGxldGVkJyAvPixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbW9uLXBhbmVsLXdyYXBwZXInPlxuICAgICAgICB7LyogUGFnZSBUaXRsZSAqL31cbiAgICAgICAgPFJvd1xuICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0ncC0xNSdcbiAgICAgICAgPlxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT0nQ2hhcml0eScgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0ZXh0PSdBZGQgRGF0YScgdmFyaWFudD0ncHJpbWFyeScgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmF5LWJveCBwLTE1Jz5cbiAgICAgICAgICA8Um93IGd1dHRlcj17WzAsIDEyXX0+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgPERpc3BsYXlHcmFwaCAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6ICcxNXB4JyB9fT5cbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzAsIDI0XX0+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IHR5cGU9J3NlYXJjaCcgcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1ncm91cCdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZpbHRlcic+RmlsdGVyIGJ5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IHR5cGU9J3NlYXJjaCcgcGxhY2Vob2xkZXI9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0+MTwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29sIiwiUm93IiwiVGFibGUiLCJQb3BvdmVyIiwiUGFnZVRpdGxlIiwiUHJpbWFyeUJ1dHRvbiIsIkRpc3BsYXlHcmFwaCIsIkZvcm1JbnB1dCIsIkN1c3RvbVRhZyIsIm9uQ2hhbmdlIiwicGFnaW5hdGlvbiIsImZpbHRlcnMiLCJzb3J0ZXIiLCJleHRyYSIsImNvbnNvbGUiLCJsb2ciLCJDaGFyaXR5Iiwib3BlblBvcG92ZXJJbmRleCIsInNldE9wZW5Qb3BvdmVySW5kZXgiLCJoYW5kbGVQb3BvdmVyT3BlbiIsImluZGV4IiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwiY29tcGFyZSIsImEiLCJiIiwibWF0aCIsIm11bHRpcGxlIiwia2V5IiwicmVuZGVyIiwidGV4dCIsInJlY29yZCIsImNvbnRlbnQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwicGFkZGluZyIsInNwYW4iLCJvbkNsaWNrIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsInRyaWdnZXIiLCJ2aXNpYmxlIiwib25WaXNpYmxlQ2hhbmdlIiwidmFyaWFudCIsImRhdGEiLCJkYXRlIiwiY2F0ZWdvcnkiLCJhbW91bnQiLCJvcmdhbmlzYXRpb24iLCJzdGF0dXMiLCJjbGFzc05hbWUiLCJqdXN0aWZ5IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImd1dHRlciIsImJhY2tncm91bmQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJkYXRhU291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./view/charity/index.tsx\n"));

/***/ })

});