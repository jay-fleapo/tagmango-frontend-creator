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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Charity: function() { return /* binding */ Charity; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/popover/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/row/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/col/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/table/index.js\");\n/* harmony import */ var _style_task_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../style/task.module.scss */ \"(app-pages-browser)/./style/task.module.scss\");\n/* harmony import */ var _style_task_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_task_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_pagetitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pagetitle */ \"(app-pages-browser)/./components/pagetitle.tsx\");\n/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/button */ \"(app-pages-browser)/./components/common/button.tsx\");\n/* harmony import */ var _components_common_graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/graph */ \"(app-pages-browser)/./components/common/graph.tsx\");\n/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/input */ \"(app-pages-browser)/./components/form/input.tsx\");\n/* harmony import */ var _components_common_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/tag */ \"(app-pages-browser)/./components/common/tag.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst onChange = (pagination, filters, sorter, extra)=>{\n    console.log(\"params\", pagination, filters, sorter, extra);\n};\nconst Charity = ()=>{\n    _s();\n    const [openPopoverIndex, setOpenPopoverIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePopoverOpen = (index)=>{\n        setOpenPopoverIndex(index === openPopoverIndex ? null : index);\n    };\n    const columns = [\n        {\n            title: \"Date\",\n            dataIndex: \"date\"\n        },\n        {\n            title: \"Category\",\n            dataIndex: \"category\"\n        },\n        {\n            title: \"Amount\",\n            dataIndex: \"amount\",\n            sorter: {\n                compare: (a, b)=>a.math - b.math,\n                multiple: 2\n            }\n        },\n        {\n            title: \"Organisation\",\n            dataIndex: \"organisation\"\n        },\n        {\n            title: \"Status\",\n            dataIndex: \"status\"\n        },\n        {\n            title: \"\",\n            dataIndex: \"\",\n            key: \"x\",\n            render: (text, record, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"130px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>handlePopoverOpen(index),\n                                style: {\n                                    display: \"block\",\n                                    marginBottom: \"12px\"\n                                },\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>handlePopoverOpen(index),\n                                style: {\n                                    display: \"block\"\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, void 0)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, void 0),\n                    trigger: \"click\",\n                    visible: openPopoverIndex === index,\n                    onVisibleChange: (visible)=>{\n                        if (!visible) {\n                            setOpenPopoverIndex(null);\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                        text: \"\",\n                        variant: \"info\",\n                        onClick: ()=>handlePopoverOpen(index)\n                    }, void 0, false, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n        }\n    ];\n    const data = [\n        {\n            key: \"3\",\n            date: \"07/12/2023\",\n            category: \"Food\",\n            amount: 322332,\n            organisation: \"Keto India\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_tag__WEBPACK_IMPORTED_MODULE_6__.CustomTag, {\n                variant: \"success\",\n                title: \"Completed\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 109,\n                columnNumber: 15\n            }, undefined)\n        },\n        {\n            key: \"4\",\n            date: \"03/11/2023\",\n            category: \"Food\",\n            amount: 2323,\n            organisation: \"Keto India\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_tag__WEBPACK_IMPORTED_MODULE_6__.CustomTag, {\n                variant: \"success\",\n                title: \"Completed\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 117,\n                columnNumber: 15\n            }, undefined)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_style_task_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"charity-page\"]), \" common-panel-wrapper\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    justify: \"space-between\",\n                    style: {\n                        alignItems: \"center\"\n                    },\n                    className: \"p-15\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            span: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagetitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: \"Charity\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            span: 12,\n                            style: {\n                                textAlign: \"right\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                                text: \"Add Data\",\n                                variant: \"primary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gray-box p-15 charity-table\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        gutter: [\n                            0,\n                            12\n                        ],\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                span: 24,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_graph__WEBPACK_IMPORTED_MODULE_4__.DisplayGraph, {}, void 0, false, {\n                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                span: 24,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        background: \"#fff\",\n                                        padding: \"15px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            gutter: [\n                                                24,\n                                                0\n                                            ],\n                                            className: \"filter-wrapper\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    span: 6,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_input__WEBPACK_IMPORTED_MODULE_5__.FormInput, {\n                                                        type: \"search\",\n                                                        placeholder: \"Search\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                        lineNumber: 145,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                    lineNumber: 144,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    span: 12,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"form-group filter-by\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                                htmlFor: \"filter\",\n                                                                style: {\n                                                                    marginBottom: 0\n                                                                },\n                                                                children: \"Filter by\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                                lineNumber: 149,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_input__WEBPACK_IMPORTED_MODULE_5__.FormInput, {\n                                                                type: \"search\",\n                                                                placeholder: \"Search\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                                lineNumber: 152,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                        lineNumber: 148,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                    lineNumber: 147,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    span: 8,\n                                                    children: \"1\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                                    lineNumber: 155,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            columns: columns,\n                                            dataSource: data,\n                                            onChange: onChange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                            lineNumber: 157,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n            lineNumber: 122,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Charity, \"RLPZb09VIMkgl88btsKOehXTauA=\");\n_c = Charity;\nvar _c;\n$RefreshReg$(_c, \"Charity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3ZpZXcvY2hhcml0eS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUTtBQUNDO0FBRUU7QUFDWTtBQUNGO0FBQ0w7QUFDQTtBQWF4RCxNQUFNWSxXQUE2QyxDQUNqREMsWUFDQUMsU0FDQUMsUUFDQUM7SUFFQUMsUUFBUUMsR0FBRyxDQUFDLFVBQVVMLFlBQVlDLFNBQVNDLFFBQVFDO0FBQ3JEO0FBRU8sTUFBTUcsVUFBVTs7SUFDckIsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHcEIsK0NBQVFBLENBQWdCO0lBRXhFLE1BQU1xQixvQkFBb0IsQ0FBQ0M7UUFDekJGLG9CQUFvQkUsVUFBVUgsbUJBQW1CLE9BQU9HO0lBQzFEO0lBQ0EsTUFBTUMsVUFBaUM7UUFDckM7WUFDRUMsT0FBTztZQUNQQyxXQUFXO1FBQ2I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztZQUNYWCxRQUFRO2dCQUNOWSxTQUFTLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLElBQUksR0FBR0QsRUFBRUMsSUFBSTtnQkFDbENDLFVBQVU7WUFDWjtRQUNGO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxXQUFXO1FBQ2I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztZQUNYTSxLQUFLO1lBQ0xDLFFBQVEsQ0FBQ0MsTUFBTUMsUUFBUVosc0JBQ3JCLDhEQUFDbEIseUZBQU9BO29CQUNOK0IsdUJBQ0UsOERBQUNDO3dCQUFJL0IsT0FBTzs0QkFBRWdDLE9BQU87NEJBQVNDLFNBQVM7d0JBQU07OzBDQUMzQyw4REFBQ0M7Z0NBQ0NDLFNBQVMsSUFBTW5CLGtCQUFrQkM7Z0NBQ2pDakIsT0FBTztvQ0FBRW9DLFNBQVM7b0NBQVNDLGNBQWM7Z0NBQU87MENBQ2pEOzs7Ozs7MENBR0QsOERBQUNIO2dDQUNDQyxTQUFTLElBQU1uQixrQkFBa0JDO2dDQUNqQ2pCLE9BQU87b0NBQUVvQyxTQUFTO2dDQUFROzBDQUMzQjs7Ozs7Ozs7Ozs7O29CQUtMRSxTQUFRO29CQUNSQyxTQUFTekIscUJBQXFCRztvQkFDOUJ1QixpQkFBaUIsQ0FBQ0Q7d0JBQ2hCLElBQUksQ0FBQ0EsU0FBUzs0QkFDWnhCLG9CQUFvQjt3QkFDdEI7b0JBQ0Y7OEJBRUEsNEVBQUNiLG9FQUFhQTt3QkFDWjBCLE1BQUs7d0JBQ0xhLFNBQVE7d0JBQ1JOLFNBQVMsSUFBTW5CLGtCQUFrQkM7Ozs7Ozs7Ozs7O1FBSXpDO0tBQ0Q7SUFFRCxNQUFNeUIsT0FBbUI7UUFDdkI7WUFDRWhCLEtBQUs7WUFDTGlCLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLGNBQWM7WUFDZEMsc0JBQVEsOERBQUMxQyw2REFBU0E7Z0JBQUNvQyxTQUFRO2dCQUFVdEIsT0FBTTs7Ozs7O1FBQzdDO1FBQ0E7WUFDRU8sS0FBSztZQUNMaUIsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsY0FBYztZQUNkQyxzQkFBUSw4REFBQzFDLDZEQUFTQTtnQkFBQ29DLFNBQVE7Z0JBQVV0QixPQUFNOzs7Ozs7UUFDN0M7S0FDRDtJQUNELHFCQUNFO2tCQUNFLDRFQUFDWTtZQUFJaUIsV0FBVyxHQUF5QixPQUF0QmhELGdGQUFxQixFQUFDOzs4QkFFdkMsOERBQUNILHlGQUFHQTtvQkFDRm9ELFNBQVM7b0JBQ1RqRCxPQUFPO3dCQUFFa0QsWUFBWTtvQkFBUztvQkFDOUJGLFdBQVU7O3NDQUVWLDhEQUFDcEQsMEZBQUdBOzRCQUFDc0MsTUFBTTtzQ0FDVCw0RUFBQ2pDLDZEQUFTQTtnQ0FBQ2tCLE9BQU07Ozs7Ozs7Ozs7O3NDQUVuQiw4REFBQ3ZCLDBGQUFHQTs0QkFBQ3NDLE1BQU07NEJBQUlsQyxPQUFPO2dDQUFFbUQsV0FBVzs0QkFBUTtzQ0FDekMsNEVBQUNqRCxvRUFBYUE7Z0NBQUMwQixNQUFLO2dDQUFXYSxTQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHM0MsOERBQUNWO29CQUFJaUIsV0FBVTs4QkFDYiw0RUFBQ25ELHlGQUFHQTt3QkFBQ3VELFFBQVE7NEJBQUM7NEJBQUc7eUJBQUc7OzBDQUNsQiw4REFBQ3hELDBGQUFHQTtnQ0FBQ3NDLE1BQU07MENBQ1QsNEVBQUMvQixrRUFBWUE7Ozs7Ozs7Ozs7MENBRWYsOERBQUNQLDBGQUFHQTtnQ0FBQ3NDLE1BQU07MENBQ1QsNEVBQUNIO29DQUFJL0IsT0FBTzt3Q0FBRXFELFlBQVk7d0NBQVFwQixTQUFTO29DQUFPOztzREFDaEQsOERBQUNwQyx5RkFBR0E7NENBQUN1RCxRQUFRO2dEQUFDO2dEQUFJOzZDQUFFOzRDQUFFSixXQUFVOzs4REFDOUIsOERBQUNwRCwwRkFBR0E7b0RBQUNzQyxNQUFNOzhEQUNULDRFQUFDOUIsNkRBQVNBO3dEQUFDa0QsTUFBSzt3REFBU0MsYUFBWTs7Ozs7Ozs7Ozs7OERBRXZDLDhEQUFDM0QsMEZBQUdBO29EQUFDc0MsTUFBTTs4REFDVCw0RUFBQ0g7d0RBQUlpQixXQUFVOzswRUFDYiw4REFBQ1E7Z0VBQU1DLFNBQVE7Z0VBQVN6RCxPQUFPO29FQUFFcUMsY0FBYztnRUFBRTswRUFBRzs7Ozs7OzBFQUdwRCw4REFBQ2pDLDZEQUFTQTtnRUFBQ2tELE1BQUs7Z0VBQVNDLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUd6Qyw4REFBQzNELDBGQUFHQTtvREFBQ3NDLE1BQU07OERBQUc7Ozs7Ozs7Ozs7OztzREFFaEIsOERBQUNwQywwRkFBS0E7NENBQ0pvQixTQUFTQTs0Q0FDVHdDLFlBQVloQjs0Q0FDWnBDLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QixFQUFFO0dBMUlXTztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi92aWV3L2NoYXJpdHkvaW5kZXgudHN4Pzg4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBSb3csIFRhYmxlLCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGUvdGFzay5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdldGl0bGUnO1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbic7XG5pbXBvcnQgeyBEaXNwbGF5R3JhcGggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9ncmFwaCc7XG5pbXBvcnQgeyBGb3JtSW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm0vaW5wdXQnO1xuaW1wb3J0IHsgQ3VzdG9tVGFnIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vdGFnJztcbmltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUsIFRhYmxlUHJvcHMgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcblxuaW50ZXJmYWNlIERhdGFUeXBlIHtcbiAgW3g6IHN0cmluZ106IGFueTtcbiAga2V5OiBSZWFjdC5LZXk7XG4gIGRhdGU6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgYW1vdW50OiBudW1iZXI7XG4gIG9yZ2FuaXNhdGlvbjogc3RyaW5nO1xuICBzdGF0dXM6IGFueTtcbn1cblxuY29uc3Qgb25DaGFuZ2U6IFRhYmxlUHJvcHM8RGF0YVR5cGU+WydvbkNoYW5nZSddID0gKFxuICBwYWdpbmF0aW9uLFxuICBmaWx0ZXJzLFxuICBzb3J0ZXIsXG4gIGV4dHJhXG4pID0+IHtcbiAgY29uc29sZS5sb2coJ3BhcmFtcycsIHBhZ2luYXRpb24sIGZpbHRlcnMsIHNvcnRlciwgZXh0cmEpO1xufTtcblxuZXhwb3J0IGNvbnN0IENoYXJpdHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuUG9wb3ZlckluZGV4LCBzZXRPcGVuUG9wb3ZlckluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVBvcG92ZXJPcGVuID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRPcGVuUG9wb3ZlckluZGV4KGluZGV4ID09PSBvcGVuUG9wb3ZlckluZGV4ID8gbnVsbCA6IGluZGV4KTtcbiAgfTtcbiAgY29uc3QgY29sdW1uczogQ29sdW1uc1R5cGU8RGF0YVR5cGU+ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRGF0ZScsXG4gICAgICBkYXRhSW5kZXg6ICdkYXRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ2F0ZWdvcnknLFxuICAgICAgZGF0YUluZGV4OiAnY2F0ZWdvcnknLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBbW91bnQnLFxuICAgICAgZGF0YUluZGV4OiAnYW1vdW50JyxcbiAgICAgIHNvcnRlcjoge1xuICAgICAgICBjb21wYXJlOiAoYSwgYikgPT4gYS5tYXRoIC0gYi5tYXRoLFxuICAgICAgICBtdWx0aXBsZTogMixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ09yZ2FuaXNhdGlvbicsXG4gICAgICBkYXRhSW5kZXg6ICdvcmdhbmlzYXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdTdGF0dXMnLFxuICAgICAgZGF0YUluZGV4OiAnc3RhdHVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRhdGFJbmRleDogJycsXG4gICAgICBrZXk6ICd4JyxcbiAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCwgaW5kZXgpID0+IChcbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMzBweCcsIHBhZGRpbmc6ICc1cHgnIH19PlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvcG92ZXJPcGVuKGluZGV4KX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206ICcxMnB4JyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9wb3Zlck9wZW4oaW5kZXgpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgdHJpZ2dlcj0nY2xpY2snXG4gICAgICAgICAgdmlzaWJsZT17b3BlblBvcG92ZXJJbmRleCA9PT0gaW5kZXh9XG4gICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXsodmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgIHNldE9wZW5Qb3BvdmVySW5kZXgobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICB0ZXh0PScnXG4gICAgICAgICAgICB2YXJpYW50PSdpbmZvJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUG9wb3Zlck9wZW4oaW5kZXgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBkYXRhOiBEYXRhVHlwZVtdID0gW1xuICAgIHtcbiAgICAgIGtleTogJzMnLFxuICAgICAgZGF0ZTogJzA3LzEyLzIwMjMnLFxuICAgICAgY2F0ZWdvcnk6ICdGb29kJyxcbiAgICAgIGFtb3VudDogMzIyMzMyLFxuICAgICAgb3JnYW5pc2F0aW9uOiAnS2V0byBJbmRpYScsXG4gICAgICBzdGF0dXM6IDxDdXN0b21UYWcgdmFyaWFudD0nc3VjY2VzcycgdGl0bGU9J0NvbXBsZXRlZCcgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICc0JyxcbiAgICAgIGRhdGU6ICcwMy8xMS8yMDIzJyxcbiAgICAgIGNhdGVnb3J5OiAnRm9vZCcsXG4gICAgICBhbW91bnQ6IDIzMjMsXG4gICAgICBvcmdhbmlzYXRpb246ICdLZXRvIEluZGlhJyxcbiAgICAgIHN0YXR1czogPEN1c3RvbVRhZyB2YXJpYW50PSdzdWNjZXNzJyB0aXRsZT0nQ29tcGxldGVkJyAvPixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVbJ2NoYXJpdHktcGFnZSddfSBjb21tb24tcGFuZWwtd3JhcHBlcmB9PlxuICAgICAgICB7LyogUGFnZSBUaXRsZSAqL31cbiAgICAgICAgPFJvd1xuICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0ncC0xNSdcbiAgICAgICAgPlxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT0nQ2hhcml0eScgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0ZXh0PSdBZGQgRGF0YScgdmFyaWFudD0ncHJpbWFyeScgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmF5LWJveCBwLTE1IGNoYXJpdHktdGFibGUnPlxuICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMCwgMTJdfT5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICA8RGlzcGxheUdyYXBoIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZmZmJywgcGFkZGluZzogJzE1cHgnIH19PlxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMjQsIDBdfSBjbGFzc05hbWU9J2ZpbHRlci13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgdHlwZT0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nU2VhcmNoJyAvPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAgZmlsdGVyLWJ5Jz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZmlsdGVyJyBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgYnlcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgdHlwZT0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nU2VhcmNoJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT4xPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29sIiwiUm93IiwiVGFibGUiLCJQb3BvdmVyIiwic3R5bGUiLCJQYWdlVGl0bGUiLCJQcmltYXJ5QnV0dG9uIiwiRGlzcGxheUdyYXBoIiwiRm9ybUlucHV0IiwiQ3VzdG9tVGFnIiwib25DaGFuZ2UiLCJwYWdpbmF0aW9uIiwiZmlsdGVycyIsInNvcnRlciIsImV4dHJhIiwiY29uc29sZSIsImxvZyIsIkNoYXJpdHkiLCJvcGVuUG9wb3ZlckluZGV4Iiwic2V0T3BlblBvcG92ZXJJbmRleCIsImhhbmRsZVBvcG92ZXJPcGVuIiwiaW5kZXgiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJjb21wYXJlIiwiYSIsImIiLCJtYXRoIiwibXVsdGlwbGUiLCJrZXkiLCJyZW5kZXIiLCJ0ZXh0IiwicmVjb3JkIiwiY29udGVudCIsImRpdiIsIndpZHRoIiwicGFkZGluZyIsInNwYW4iLCJvbkNsaWNrIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsInRyaWdnZXIiLCJ2aXNpYmxlIiwib25WaXNpYmxlQ2hhbmdlIiwidmFyaWFudCIsImRhdGEiLCJkYXRlIiwiY2F0ZWdvcnkiLCJhbW91bnQiLCJvcmdhbmlzYXRpb24iLCJzdGF0dXMiLCJjbGFzc05hbWUiLCJqdXN0aWZ5IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImd1dHRlciIsImJhY2tncm91bmQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJkYXRhU291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./view/charity/index.tsx\n"));

/***/ })

});