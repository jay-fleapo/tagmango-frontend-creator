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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Charity: function() { return /* binding */ Charity; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/popover/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/row/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/col/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Popover,Row,Table!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/table/index.js\");\n/* harmony import */ var _components_pagetitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pagetitle */ \"(app-pages-browser)/./components/pagetitle.tsx\");\n/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/common/button */ \"(app-pages-browser)/./components/common/button.tsx\");\n/* harmony import */ var _components_common_graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/graph */ \"(app-pages-browser)/./components/common/graph.tsx\");\n/* harmony import */ var _components_form_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/input */ \"(app-pages-browser)/./components/form/input.tsx\");\n/* harmony import */ var _components_common_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/common/tag */ \"(app-pages-browser)/./components/common/tag.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst onChange = (pagination, filters, sorter, extra)=>{\n    console.log(\"params\", pagination, filters, sorter, extra);\n};\nconst Charity = ()=>{\n    _s();\n    const [openPopoverIndex, setOpenPopoverIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handlePopoverOpen = (index)=>{\n        setOpenPopoverIndex(index === openPopoverIndex ? null : index);\n    };\n    const columns = [\n        {\n            title: \"Task\",\n            dataIndex: \"task\"\n        },\n        {\n            title: \"Category\",\n            dataIndex: \"category\"\n        },\n        {\n            title: \"Deadline\",\n            dataIndex: \"deadline\",\n            sorter: {\n                compare: (a, b)=>a.math - b.math,\n                multiple: 2\n            }\n        },\n        {\n            title: \"Status\",\n            dataIndex: \"status\"\n        },\n        {\n            title: \"\",\n            dataIndex: \"\",\n            key: \"x\",\n            render: (text, record, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"130px\",\n                            padding: \"5px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>handlePopoverOpen(index),\n                                style: {\n                                    display: \"block\",\n                                    marginBottom: \"12px\"\n                                },\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>handlePopoverOpen(index),\n                                style: {\n                                    display: \"block\"\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, void 0)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, void 0),\n                    trigger: \"click\",\n                    visible: openPopoverIndex === index,\n                    onVisibleChange: (visible)=>{\n                        if (!visible) {\n                            setOpenPopoverIndex(null);\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                        text: \"\",\n                        variant: \"info\",\n                        onClick: ()=>handlePopoverOpen(index)\n                    }, void 0, false, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n        }\n    ];\n    const data = [\n        {\n            key: \"1\",\n            task: \"Task name here Task name here \",\n            category: \"Selling\",\n            deadline: \"08/12/2020 by 06:00PM\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                text: \"Mark as complete\",\n                variant: \"secondary\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 102,\n                columnNumber: 15\n            }, undefined)\n        },\n        {\n            key: \"2\",\n            task: \"Task name here\",\n            category: \"Selling\",\n            deadline: \"08/12/2020 by 06:00PM\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                text: \"Mark as complete\",\n                variant: \"secondary\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 109,\n                columnNumber: 15\n            }, undefined)\n        },\n        {\n            key: \"3\",\n            task: \"Task name here\",\n            category: \"Selling\",\n            deadline: \"01/12/2020 by 06:00PM\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_tag__WEBPACK_IMPORTED_MODULE_6__.CustomTag, {\n                variant: \"success\",\n                title: \"Completed\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 116,\n                columnNumber: 15\n            }, undefined)\n        },\n        {\n            key: \"4\",\n            task: \"Task name here\",\n            category: \"Selling\",\n            deadline: \"28/12/2020 by 06:00PM\",\n            status: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_tag__WEBPACK_IMPORTED_MODULE_6__.CustomTag, {\n                variant: \"success\",\n                title: \"Completed\"\n            }, void 0, false, {\n                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                lineNumber: 123,\n                columnNumber: 15\n            }, undefined)\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"common-panel-wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    justify: \"space-between\",\n                    style: {\n                        alignItems: \"center\"\n                    },\n                    className: \"p-15\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            span: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagetitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: \"Charity\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            span: 12,\n                            style: {\n                                textAlign: \"right\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_button__WEBPACK_IMPORTED_MODULE_3__.PrimaryButton, {\n                                text: \"Add Data\",\n                                variant: \"primary\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gray-box p-15\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        gutter: [\n                            0,\n                            12\n                        ],\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                span: 24,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_graph__WEBPACK_IMPORTED_MODULE_4__.DisplayGraph, {}, void 0, false, {\n                                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                span: 24,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            background: \"#fff\",\n                                            padding: \"15px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_input__WEBPACK_IMPORTED_MODULE_5__.FormInput, {\n                                        type: \"search\",\n                                        placeholder: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                        lineNumber: 149,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Popover_Row_Table_antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        columns: columns,\n                                        dataSource: data,\n                                        onChange: onChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chetanmane/Documents/fleapo/tagmango-frontend-creator/view/charity/index.tsx\",\n            lineNumber: 128,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Charity, \"RLPZb09VIMkgl88btsKOehXTauA=\");\n_c = Charity;\nvar _c;\n$RefreshReg$(_c, \"Charity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3ZpZXcvY2hhcml0eS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1E7QUFFRztBQUNZO0FBQ0Y7QUFDTDtBQUNBO0FBWXhELE1BQU1XLFdBQTZDLENBQ2pEQyxZQUNBQyxTQUNBQyxRQUNBQztJQUVBQyxRQUFRQyxHQUFHLENBQUMsVUFBVUwsWUFBWUMsU0FBU0MsUUFBUUM7QUFDckQ7QUFFTyxNQUFNRyxVQUFVOztJQUNyQixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUduQiwrQ0FBUUEsQ0FBZ0I7SUFFeEUsTUFBTW9CLG9CQUFvQixDQUFDQztRQUN6QkYsb0JBQW9CRSxVQUFVSCxtQkFBbUIsT0FBT0c7SUFDMUQ7SUFDQSxNQUFNQyxVQUFpQztRQUNyQztZQUNFQyxPQUFPO1lBQ1BDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztRQUNiO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxXQUFXO1lBQ1hYLFFBQVE7Z0JBQ05ZLFNBQVMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsSUFBSSxHQUFHRCxFQUFFQyxJQUFJO2dCQUNsQ0MsVUFBVTtZQUNaO1FBQ0Y7UUFDQTtZQUNFTixPQUFPO1lBQ1BDLFdBQVc7UUFDYjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsV0FBVztZQUNYTSxLQUFLO1lBQ0xDLFFBQVEsQ0FBQ0MsTUFBTUMsUUFBUVosc0JBQ3JCLDhEQUFDakIseUZBQU9BO29CQUNOOEIsdUJBQ0UsOERBQUNDO3dCQUFJQyxPQUFPOzRCQUFFQyxPQUFPOzRCQUFTQyxTQUFTO3dCQUFNOzswQ0FDM0MsOERBQUNDO2dDQUNDQyxTQUFTLElBQU1wQixrQkFBa0JDO2dDQUNqQ2UsT0FBTztvQ0FBRUssU0FBUztvQ0FBU0MsY0FBYztnQ0FBTzswQ0FDakQ7Ozs7OzswQ0FHRCw4REFBQ0g7Z0NBQ0NDLFNBQVMsSUFBTXBCLGtCQUFrQkM7Z0NBQ2pDZSxPQUFPO29DQUFFSyxTQUFTO2dDQUFROzBDQUMzQjs7Ozs7Ozs7Ozs7O29CQUtMRSxTQUFRO29CQUNSQyxTQUFTMUIscUJBQXFCRztvQkFDOUJ3QixpQkFBaUIsQ0FBQ0Q7d0JBQ2hCLElBQUksQ0FBQ0EsU0FBUzs0QkFDWnpCLG9CQUFvQjt3QkFDdEI7b0JBQ0Y7OEJBRUEsNEVBQUNiLG9FQUFhQTt3QkFDWjBCLE1BQUs7d0JBQ0xjLFNBQVE7d0JBQ1JOLFNBQVMsSUFBTXBCLGtCQUFrQkM7Ozs7Ozs7Ozs7O1FBSXpDO0tBQ0Q7SUFFRCxNQUFNMEIsT0FBbUI7UUFDdkI7WUFDRWpCLEtBQUs7WUFDTGtCLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxVQUFVO1lBQ1ZDLHNCQUFRLDhEQUFDN0Msb0VBQWFBO2dCQUFDMEIsTUFBSztnQkFBbUJjLFNBQVE7Ozs7OztRQUN6RDtRQUNBO1lBQ0VoQixLQUFLO1lBQ0xrQixNQUFNO1lBQ05DLFVBQVU7WUFDVkMsVUFBVTtZQUNWQyxzQkFBUSw4REFBQzdDLG9FQUFhQTtnQkFBQzBCLE1BQUs7Z0JBQW1CYyxTQUFROzs7Ozs7UUFDekQ7UUFDQTtZQUNFaEIsS0FBSztZQUNMa0IsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsc0JBQVEsOERBQUMxQyw2REFBU0E7Z0JBQUNxQyxTQUFRO2dCQUFVdkIsT0FBTTs7Ozs7O1FBQzdDO1FBQ0E7WUFDRU8sS0FBSztZQUNMa0IsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsc0JBQVEsOERBQUMxQyw2REFBU0E7Z0JBQUNxQyxTQUFRO2dCQUFVdkIsT0FBTTs7Ozs7O1FBQzdDO0tBQ0Q7SUFDRCxxQkFDRTtrQkFDRSw0RUFBQ1k7WUFBSWlCLFdBQVU7OzhCQUViLDhEQUFDbEQseUZBQUdBO29CQUNGbUQsU0FBUztvQkFDVGpCLE9BQU87d0JBQUVrQixZQUFZO29CQUFTO29CQUM5QkYsV0FBVTs7c0NBRVYsOERBQUNuRCx5RkFBR0E7NEJBQUNzQyxNQUFNO3NDQUNULDRFQUFDbEMsNkRBQVNBO2dDQUFDa0IsT0FBTTs7Ozs7Ozs7Ozs7c0NBRW5CLDhEQUFDdEIseUZBQUdBOzRCQUFDc0MsTUFBTTs0QkFBSUgsT0FBTztnQ0FBRW1CLFdBQVc7NEJBQVE7c0NBQ3pDLDRFQUFDakQsb0VBQWFBO2dDQUFDMEIsTUFBSztnQ0FBV2MsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRzNDLDhEQUFDWDtvQkFBSWlCLFdBQVU7OEJBQ2IsNEVBQUNsRCx5RkFBR0E7d0JBQUNzRCxRQUFROzRCQUFDOzRCQUFHO3lCQUFHOzswQ0FDbEIsOERBQUN2RCx5RkFBR0E7Z0NBQUNzQyxNQUFNOzBDQUNULDRFQUFDaEMsa0VBQVlBOzs7Ozs7Ozs7OzBDQUVmLDhEQUFDTix5RkFBR0E7Z0NBQUNzQyxNQUFNOztrREFDVCw4REFBQ0o7d0NBQUlDLE9BQU87NENBQUVxQixZQUFZOzRDQUFRbkIsU0FBUzt3Q0FBTzs7Ozs7O2tEQUNsRCw4REFBQzlCLDZEQUFTQTt3Q0FBQ2tELE1BQUs7d0NBQVNDLGFBQVk7Ozs7OztrREFDckMsOERBQUN4RCwwRkFBS0E7d0NBQUNtQixTQUFTQTt3Q0FBU3NDLFlBQVliO3dDQUFNckMsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9uRSxFQUFFO0dBaElXTztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi92aWV3L2NoYXJpdHkvaW5kZXgudHN4Pzg4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sLCBSb3csIFRhYmxlLCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYWdldGl0bGUnO1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL2J1dHRvbic7XG5pbXBvcnQgeyBEaXNwbGF5R3JhcGggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9ncmFwaCc7XG5pbXBvcnQgeyBGb3JtSW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm0vaW5wdXQnO1xuaW1wb3J0IHsgQ3VzdG9tVGFnIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21tb24vdGFnJztcbmltcG9ydCB0eXBlIHsgQ29sdW1uc1R5cGUsIFRhYmxlUHJvcHMgfSBmcm9tICdhbnRkL2VzL3RhYmxlJztcblxuaW50ZXJmYWNlIERhdGFUeXBlIHtcbiAgW3g6IHN0cmluZ106IGFueTtcbiAga2V5OiBSZWFjdC5LZXk7XG4gIHRhc2s6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgZGVhZGxpbmU6IGFueTtcbiAgc3RhdHVzOiBhbnk7XG59XG5cbmNvbnN0IG9uQ2hhbmdlOiBUYWJsZVByb3BzPERhdGFUeXBlPlsnb25DaGFuZ2UnXSA9IChcbiAgcGFnaW5hdGlvbixcbiAgZmlsdGVycyxcbiAgc29ydGVyLFxuICBleHRyYVxuKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdwYXJhbXMnLCBwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXIsIGV4dHJhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDaGFyaXR5ID0gKCkgPT4ge1xuICBjb25zdCBbb3BlblBvcG92ZXJJbmRleCwgc2V0T3BlblBvcG92ZXJJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVQb3BvdmVyT3BlbiA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0T3BlblBvcG92ZXJJbmRleChpbmRleCA9PT0gb3BlblBvcG92ZXJJbmRleCA/IG51bGwgOiBpbmRleCk7XG4gIH07XG4gIGNvbnN0IGNvbHVtbnM6IENvbHVtbnNUeXBlPERhdGFUeXBlPiA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1Rhc2snLFxuICAgICAgZGF0YUluZGV4OiAndGFzaycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NhdGVnb3J5JyxcbiAgICAgIGRhdGFJbmRleDogJ2NhdGVnb3J5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRGVhZGxpbmUnLFxuICAgICAgZGF0YUluZGV4OiAnZGVhZGxpbmUnLFxuICAgICAgc29ydGVyOiB7XG4gICAgICAgIGNvbXBhcmU6IChhLCBiKSA9PiBhLm1hdGggLSBiLm1hdGgsXG4gICAgICAgIG11bHRpcGxlOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnU3RhdHVzJyxcbiAgICAgIGRhdGFJbmRleDogJ3N0YXR1cycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBkYXRhSW5kZXg6ICcnLFxuICAgICAga2V5OiAneCcsXG4gICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTMwcHgnLCBwYWRkaW5nOiAnNXB4JyB9fT5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQb3BvdmVyT3BlbihpbmRleCl9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luQm90dG9tOiAnMTJweCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvcG92ZXJPcGVuKGluZGV4KX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyaWdnZXI9J2NsaWNrJ1xuICAgICAgICAgIHZpc2libGU9e29wZW5Qb3BvdmVySW5kZXggPT09IGluZGV4fVxuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17KHZpc2libGUpID0+IHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICBzZXRPcGVuUG9wb3ZlckluZGV4KG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgdGV4dD0nJ1xuICAgICAgICAgICAgdmFyaWFudD0naW5mbydcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBvcG92ZXJPcGVuKGluZGV4KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcG92ZXI+XG4gICAgICApLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZGF0YTogRGF0YVR5cGVbXSA9IFtcbiAgICB7XG4gICAgICBrZXk6ICcxJyxcbiAgICAgIHRhc2s6ICdUYXNrIG5hbWUgaGVyZSBUYXNrIG5hbWUgaGVyZSAnLFxuICAgICAgY2F0ZWdvcnk6ICdTZWxsaW5nJyxcbiAgICAgIGRlYWRsaW5lOiAnMDgvMTIvMjAyMCBieSAwNjowMFBNJyxcbiAgICAgIHN0YXR1czogPFByaW1hcnlCdXR0b24gdGV4dD0nTWFyayBhcyBjb21wbGV0ZScgdmFyaWFudD0nc2Vjb25kYXJ5JyAvPixcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJzInLFxuICAgICAgdGFzazogJ1Rhc2sgbmFtZSBoZXJlJyxcbiAgICAgIGNhdGVnb3J5OiAnU2VsbGluZycsXG4gICAgICBkZWFkbGluZTogJzA4LzEyLzIwMjAgYnkgMDY6MDBQTScsXG4gICAgICBzdGF0dXM6IDxQcmltYXJ5QnV0dG9uIHRleHQ9J01hcmsgYXMgY29tcGxldGUnIHZhcmlhbnQ9J3NlY29uZGFyeScgLz4sXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICczJyxcbiAgICAgIHRhc2s6ICdUYXNrIG5hbWUgaGVyZScsXG4gICAgICBjYXRlZ29yeTogJ1NlbGxpbmcnLFxuICAgICAgZGVhZGxpbmU6ICcwMS8xMi8yMDIwIGJ5IDA2OjAwUE0nLFxuICAgICAgc3RhdHVzOiA8Q3VzdG9tVGFnIHZhcmlhbnQ9J3N1Y2Nlc3MnIHRpdGxlPSdDb21wbGV0ZWQnIC8+LFxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnNCcsXG4gICAgICB0YXNrOiAnVGFzayBuYW1lIGhlcmUnLFxuICAgICAgY2F0ZWdvcnk6ICdTZWxsaW5nJyxcbiAgICAgIGRlYWRsaW5lOiAnMjgvMTIvMjAyMCBieSAwNjowMFBNJyxcbiAgICAgIHN0YXR1czogPEN1c3RvbVRhZyB2YXJpYW50PSdzdWNjZXNzJyB0aXRsZT0nQ29tcGxldGVkJyAvPixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbW9uLXBhbmVsLXdyYXBwZXInPlxuICAgICAgICB7LyogUGFnZSBUaXRsZSAqL31cbiAgICAgICAgPFJvd1xuICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT0ncC0xNSdcbiAgICAgICAgPlxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT0nQ2hhcml0eScgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHNwYW49ezEyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICA8UHJpbWFyeUJ1dHRvbiB0ZXh0PSdBZGQgRGF0YScgdmFyaWFudD0ncHJpbWFyeScgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmF5LWJveCBwLTE1Jz5cbiAgICAgICAgICA8Um93IGd1dHRlcj17WzAsIDEyXX0+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgPERpc3BsYXlHcmFwaCAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI2ZmZicsIHBhZGRpbmc6ICcxNXB4JyB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgPEZvcm1JbnB1dCB0eXBlPSdzZWFyY2gnIHBsYWNlaG9sZGVyPSdTZWFyY2gnIC8+XG4gICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtkYXRhfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbCIsIlJvdyIsIlRhYmxlIiwiUG9wb3ZlciIsIlBhZ2VUaXRsZSIsIlByaW1hcnlCdXR0b24iLCJEaXNwbGF5R3JhcGgiLCJGb3JtSW5wdXQiLCJDdXN0b21UYWciLCJvbkNoYW5nZSIsInBhZ2luYXRpb24iLCJmaWx0ZXJzIiwic29ydGVyIiwiZXh0cmEiLCJjb25zb2xlIiwibG9nIiwiQ2hhcml0eSIsIm9wZW5Qb3BvdmVySW5kZXgiLCJzZXRPcGVuUG9wb3ZlckluZGV4IiwiaGFuZGxlUG9wb3Zlck9wZW4iLCJpbmRleCIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsImNvbXBhcmUiLCJhIiwiYiIsIm1hdGgiLCJtdWx0aXBsZSIsImtleSIsInJlbmRlciIsInRleHQiLCJyZWNvcmQiLCJjb250ZW50IiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsInBhZGRpbmciLCJzcGFuIiwib25DbGljayIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJ0cmlnZ2VyIiwidmlzaWJsZSIsIm9uVmlzaWJsZUNoYW5nZSIsInZhcmlhbnQiLCJkYXRhIiwidGFzayIsImNhdGVnb3J5IiwiZGVhZGxpbmUiLCJzdGF0dXMiLCJjbGFzc05hbWUiLCJqdXN0aWZ5IiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsImd1dHRlciIsImJhY2tncm91bmQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJkYXRhU291cmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./view/charity/index.tsx\n"));

/***/ })

});