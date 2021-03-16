module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/TableDropdown.js":
/*!***********************************************!*\
  !*** ./src/forum/components/TableDropdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Separator */ "flarum/common/components/Separator");
/* harmony import */ var flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../proseMirror/commands */ "./src/forum/proseMirror/commands.js");








function TableDropdown() {
  var FormDropdown = __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").components.FormDropdown;

  var TableDropdown =
  /*#__PURE__*/
  function (_FormDropdown) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TableDropdown, _FormDropdown);

    function TableDropdown() {
      return _FormDropdown.apply(this, arguments) || this;
    }

    var _proto = TableDropdown.prototype;

    _proto.oninit = function oninit(vnode) {
      var _this = this;

      _FormDropdown.prototype.oninit.call(this, vnode);

      this.state = this.attrs.state;
      this.state.addItem(this.attrs.type, function (state, dispatch) {
        return _this.command(state, dispatch);
      }, this.onEditorUpdate.bind(this));
      this.numCols = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(3);
      this.numRows = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(4);
      this.labelCells = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_6___default()(true);
    };

    _proto.getMenu = function getMenu(items) {
      var _this2 = this;

      if (!this.inTable()) {
        return _FormDropdown.prototype.getMenu.call(this, items);
      }

      var commandsToButtons = function commandsToButtons(commands) {
        return commands.map(function (command) {
          return m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
            onclick: _this2.click.bind(_this2, command.command),
            onkeydown: _this2.keydown.bind(_this2, command.command)
          }, app.translator.trans("askvortsov-pipetables.forum.composer.table_menu." + command.translation));
        });
      };

      var colCommands = [{
        translation: 'remove_column',
        command: _proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["removeColumnCommand"]
      }, {
        translation: 'insert_column_before',
        command: _proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["insertTableColumnBeforeCommand"]
      }, {
        translation: 'insert_column_after',
        command: _proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["insertTableColumnAfterCommand"]
      }];
      var rowCommands = [{
        translation: 'remove_row',
        command: _proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["removeRowCommand"]
      }, {
        translation: 'insert_row_before',
        command: _proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["insertTableRowBeforeCommand"]
      }, {
        translation: 'insert_row_after',
        command: _proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["insertTableRowAfterCommand"]
      }];
      return m("ul", {
        className: 'Dropdown-menu dropdown-menu TableDropdownMenu'
      }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()([].concat(commandsToButtons(colCommands), [flarum_common_components_Separator__WEBPACK_IMPORTED_MODULE_2___default.a.component()], commandsToButtons(rowCommands))));
    };

    _proto.fields = function fields() {
      var items = _FormDropdown.prototype.fields.call(this);

      items.add('numCols', m("div", {
        className: "Form-group"
      }, m("label", null, app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_cols')), m("input", {
        className: "FormControl",
        name: "numCols",
        type: "number",
        placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_cols')),
        bidi: this.numCols,
        required: true
      })), 10);
      items.add('numRows', m("div", {
        className: "Form-group"
      }, m("label", null, app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_rows')), m("input", {
        className: "FormControl",
        name: "numRows",
        type: "number",
        placeholder: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_rows')),
        bidi: this.numRows,
        required: true
      })), 10);
      items.add('labelCells', m("div", {
        className: "Form-group"
      }, flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        state: this.labelCells(),
        onchange: this.labelCells
      }, app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.label_cells'))), 9);
      return items;
    };

    _proto.inTable = function inTable() {
      return Object(_proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["inTable"])(this.attrs.state.editorView.state);
    };

    _proto.onEditorUpdate = function onEditorUpdate() {
      this.currInTable = this.inTable();
    };

    _proto.keydown = function keydown(command, e) {
      if (e.key === ' ' || e.key === 'Enter') {
        this.click(command, e);
      }
    };

    _proto.click = function click(command, e) {
      e.preventDefault();
      this.command = command;
      return this.state.run(this.attrs.type);
    };

    _proto.insert = function insert() {
      if (!this.inTable()) {
        this.command = Object(_proseMirror_commands__WEBPACK_IMPORTED_MODULE_7__["insertTableCommand"])(parseInt(this.numRows()), parseInt(this.numCols()), this.labelCells());
        this.state.run(this.attrs.type);
      }
    };

    _proto.onEditorUpdate = function onEditorUpdate() {
      this.active = !!this.inTable();
      this.$('.Dropdown-toggle').toggleClass('active', this.active);
    };

    return TableDropdown;
  }(FormDropdown);

  return TableDropdown;
}

/***/ }),

/***/ "./src/forum/configureRichText.js":
/*!****************************************!*\
  !*** ./src/forum/configureRichText.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureRichText; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TableDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TableDropdown */ "./src/forum/components/TableDropdown.js");
/* harmony import */ var _proseMirror_tableKeymap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proseMirror/tableKeymap */ "./src/forum/proseMirror/tableKeymap.js");
/* harmony import */ var _proseMirror_tableSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proseMirror/tableSchema */ "./src/forum/proseMirror/tableSchema.js");





function configureRichText() {
  if (!('askvortsov-rich-text' in flarum.extensions)) return;

  var ProseMirrorMenu = __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").components.ProseMirrorMenu;

  var TableDropdownComponent = Object(_components_TableDropdown__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(ProseMirrorMenu.prototype, 'items', function (items) {
    items.add('table', TableDropdownComponent.component({
      type: 'table',
      icon: 'fas fa-table',
      tooltip: app.translator.trans('askvortsov-pipetables.forum.composer.table_tooltip'),
      state: this.attrs.state
    }), 10);
  });

  var MarkdownSerializerBuilder = __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").proseMirror.markdown.MarkdownSerializerBuilder;

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(MarkdownSerializerBuilder.prototype, 'buildNodes', function (nodes) {
    var richTextSchema = this.schema;

    nodes.table = function table(state, node) {
      function serializeTableHead(head) {
        var columnAlignments = [];
        head.forEach(function (headRow) {
          if (headRow.type === richTextSchema.nodes.table_row) {
            columnAlignments = serializeTableRow(headRow);
          }
        }); // write table header separator

        for (var _iterator = columnAlignments, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var alignment = _ref;
          state.write('|');
          state.write(alignment === 'left' || alignment === 'center' ? ':' : ' ');
          state.write('---');
          state.write(alignment === 'right' || alignment === 'center' ? ':' : ' ');
        }

        state.write('|');
        state.ensureNewLine();
      }

      function serializeTableBody(body) {
        body.forEach(function (bodyRow) {
          if (bodyRow.type === richTextSchema.nodes.table_row) {
            serializeTableRow(bodyRow);
          }
        });
        state.ensureNewLine();
      }

      function serializeTableRow(row) {
        var columnAlignment = [];
        row.forEach(function (cell) {
          if (cell.type === richTextSchema.nodes.table_header || cell.type === richTextSchema.nodes.table_cell) {
            var alignment = serializeTableCell(cell);
            columnAlignment.push(alignment);
          }
        });
        state.write('|');
        state.ensureNewLine();
        return columnAlignment;
      }

      function serializeTableCell(cell) {
        state.write('| ');
        state.renderInline(cell);
        state.write(' ');
        return findAlignment(cell);
      }

      function findAlignment(cell) {
        var alignment = cell.attrs.style;

        if (!alignment) {
          return null;
        } // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec


        var match = alignment.match(/text-align:[ ]?(left|right|center)/);

        if (match && match[1]) {
          return match[1];
        }

        return null;
      } // TODO: don't rely on node names


      node.forEach(function (table_child) {
        if (table_child.type.name === 'table_head') serializeTableHead(table_child);
        if (table_child.type.name === 'table_body') serializeTableBody(table_child);
      });
      state.ensureNewLine();
      state.write('\n');
    };
  });

  var MarkdownParserBuilder = __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").proseMirror.markdown.MarkdownParserBuilder;

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(MarkdownParserBuilder.prototype, 'buildTokens', function (tokens) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(tokens, {
      table: {
        block: 'table'
      },
      thead: {
        block: 'table_head'
      },
      tbody: {
        block: 'table_body'
      },
      th: {
        block: 'table_header',
        getAttrs: function getAttrs(tok) {
          return {
            style: tok.attrGet('style')
          };
        }
      },
      tr: {
        block: 'table_row'
      },
      td: {
        block: 'table_cell',
        getAttrs: function getAttrs(tok) {
          return {
            style: tok.attrGet('style')
          };
        }
      }
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(MarkdownParserBuilder.prototype, 'buildTokenizer', function (tokenizer) {
    tokenizer.enable('table');
  });

  var SchemaBuilder = __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").proseMirror.markdown.SchemaBuilder;

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(SchemaBuilder.prototype, 'buildNodes', function (original) {
    var nodes = original();
    return nodes.addBefore('image', 'table', _proseMirror_tableSchema__WEBPACK_IMPORTED_MODULE_4__["tableNodeSpec"]).addBefore('image', 'table_head', _proseMirror_tableSchema__WEBPACK_IMPORTED_MODULE_4__["tableHeadNodeSpec"]).addBefore('image', 'table_body', _proseMirror_tableSchema__WEBPACK_IMPORTED_MODULE_4__["tableBodyNodeSpec"]).addBefore('image', 'table_row', _proseMirror_tableSchema__WEBPACK_IMPORTED_MODULE_4__["tableRowNodeSpec"]).addBefore('image', 'table_cell', _proseMirror_tableSchema__WEBPACK_IMPORTED_MODULE_4__["tableCellNodeSpec"]).addBefore('image', 'table_header', _proseMirror_tableSchema__WEBPACK_IMPORTED_MODULE_4__["tableHeaderNodeSpec"]);
  });

  var ProseMirrorEditorDriver = __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").proseMirror.ProseMirrorEditorDriver;

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(ProseMirrorEditorDriver.prototype, 'buildPluginItems', function (items) {
    items.add('tableKeymap', __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").keymap(_proseMirror_tableKeymap__WEBPACK_IMPORTED_MODULE_3__["tableKeymap"]), 10);
  });
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Post */ "flarum/components/Post");
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configureRichText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configureRichText */ "./src/forum/configureRichText.js");




flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('askvortsov-pipetables', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function () {
    function addDataLabelsToTable(table) {
      var labels = [];

      for (var _iterator = table.getElementsByTagName('th'), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var th = _ref;
        labels.push(th.textContent);
      }

      for (var _iterator2 = table.getElementsByTagName('tr'), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var tr = _ref2;
        var i = -1;

        for (var _iterator3 = tr.getElementsByTagName('td'), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var td = _ref3;
          td.setAttribute('data-label', labels[++i] || '');
        }
      }
    }

    for (var _iterator4 = document.getElementsByTagName('table'), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var table = _ref4;
      addDataLabelsToTable(table);
    }
  });

  if ('askvortsov-rich-text' in flarum.extensions) {
    Object(_configureRichText__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
});

/***/ }),

/***/ "./src/forum/proseMirror/commands.js":
/*!*******************************************!*\
  !*** ./src/forum/proseMirror/commands.js ***!
  \*******************************************/
/*! exports provided: inTable, moveSelectionAfterTableCommand, moveSelectionBeforeTableCommand, insertTableRowBeforeCommand, insertTableRowAfterCommand, insertTableColumnAfterCommand, insertTableColumnBeforeCommand, removeRowCommand, removeColumnCommand, removeTableContentCommand, moveToPreviousCellCommand, moveToNextCellCommand, insertTableCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inTable", function() { return inTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveSelectionAfterTableCommand", function() { return moveSelectionAfterTableCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveSelectionBeforeTableCommand", function() { return moveSelectionBeforeTableCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertTableRowBeforeCommand", function() { return insertTableRowBeforeCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertTableRowAfterCommand", function() { return insertTableRowAfterCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertTableColumnAfterCommand", function() { return insertTableColumnAfterCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertTableColumnBeforeCommand", function() { return insertTableColumnBeforeCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRowCommand", function() { return removeRowCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeColumnCommand", function() { return removeColumnCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTableContentCommand", function() { return removeTableContentCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToPreviousCellCommand", function() { return moveToPreviousCellCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToNextCellCommand", function() { return moveToNextCellCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertTableCommand", function() { return insertTableCommand; });
function tableNodes(schema) {
  return [schema.nodes.table, schema.nodes.table_head, schema.nodes.table_body, schema.nodes.table_row, schema.nodes.table_cell, schema.nodes.table_header];
}

function inTable(state) {
  return tableNodes(state.schema).includes(state.selection.$head.parent.type);
}

function inTableHead(state) {
  return state.selection.$head.parent.type === state.schema.nodes.table_header;
}

function moveSelectionAfterTableCommand(state, dispatch) {
  return exitTableCommand(state, dispatch, false);
}
function moveSelectionBeforeTableCommand(state, dispatch) {
  return exitTableCommand(state, dispatch, true);
}

function exitTableCommand(state, dispatch, before) {
  if (before === void 0) {
    before = false;
  }

  // TODO: Cleanup
  var schema = state.schema;

  if (!inTable(state)) {
    return false;
  }

  if (dispatch) {
    // our hierarchy is table > table_head | table_body > table_row > table_cell
    // and we're relying on that to be always true.
    // That's why .after(-3) selects the parent _table_ node from a table_cell node
    var type = schema.nodes.paragraph;
    var newPosition = before ? state.selection.$head.before(-3) - 1 : state.selection.$head.after(-3) + 1;
    var tr = state.tr; // if the position before/after the table doesn't exist, let's insert a paragraph there

    try {
      tr.doc.resolve(newPosition);
    } catch (e) {
      var insertionPosition = before ? newPosition + 1 : newPosition - 1;
      tr.insert(insertionPosition, type.create());
    }

    tr.setSelection(__webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").Selection.near(tr.doc.resolve(Math.max(0, newPosition)), 1));
    dispatch(tr.scrollIntoView());
  }

  return true;
}

function insertTableRowBeforeCommand(state, dispatch) {
  return insertTableRowCommand(true, state, dispatch);
}
function insertTableRowAfterCommand(state, dispatch) {
  return insertTableRowCommand(false, state, dispatch);
}

function insertTableRowCommand(before, state, dispatch) {
  // TODO: Cleanup
  var schema = state.schema;

  if (!inTable(state) || inTableHead(state)) {
    return false;
  }

  if (dispatch) {
    var $head = state.selection.$head;
    var tableRowNode = $head.node(-1);
    var newTableCells = [];
    tableRowNode.forEach(function (cell) {
      newTableCells.push(schema.nodes.table_cell.create(cell.attrs));
    });
    var newTableRow = schema.nodes.table_row.create(null, newTableCells);
    var positionToInsert = before ? $head.before(-1) : $head.after(-1);
    var tr = state.tr.insert(positionToInsert, newTableRow);
    dispatch(tr.scrollIntoView());
  }

  return true;
}

function insertTableColumnAfterCommand(state, dispatch) {
  return insertTableColumnCommand(false, state, dispatch);
}
function insertTableColumnBeforeCommand(state, dispatch) {
  return insertTableColumnCommand(true, state, dispatch);
}
/**
 *  Insert a new table column in this table
 * 1. find the index of the selected table cell in the current table row
 * 2. walk through the entire document to traverse all rows in our selected table
 * 3. for each table row, find the table cell at the desired index and get its position
 * 4. insert a new table_cell or table_header node before/after the found position
 */

function insertTableColumnCommand(before, state, dispatch) {
  // TODO: Cleanup
  var schema = state.schema;

  if (!inTable(state)) {
    return false;
  }

  if (dispatch) {
    var $head = state.selection.$head;
    var selectedTable = $head.node(-3);
    var selectedCellIndex = $head.index(-1); // find and store all positions where we need to insert new cells

    var newCells = [];
    var tableOffset = $head.start(-3);
    var targetCell; // traverse the current table to find the absolute positions of our cells to be inserted

    selectedTable.descendants(function (node, pos) {
      if (!tableNodes(schema).includes(node.type)) {
        return false; // don't descend into non-table nodes
      }

      if (node.type === schema.nodes.table_row) {
        targetCell = node.child(selectedCellIndex);
      }

      if (targetCell && node == targetCell) {
        var position = before ? selectedTable.resolve(pos + 1).before() : selectedTable.resolve(pos + 1).after(); // position is relative to the start of the table, so we need
        // to add the table offset (distance to start of document)

        newCells.push([node.type, tableOffset + position]);
      }
    }); // insert new cells from bottom to top (reverse order)
    // to avoid inserted cells making our found positions obsolete

    var tr = state.tr;

    for (var _iterator = newCells.reverse(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var newCell = _ref;
      tr = tr.insert(newCell[1], newCell[0].create());
    }

    dispatch(tr.scrollIntoView());
  }

  return true;
}

function removeRowCommand(state, dispatch) {
  if (!inTable(state) || inTableHead(state)) {
    return false;
  }

  if (dispatch) {
    var tr = state.tr;
    var $head = state.selection.$head; // delete entire table if we're deleting the last row in the table body

    if ($head.node(-2).childCount === 1) {
      return removeTableCommand(state, dispatch);
    } // delete from start to end of this row (node at -1 position from the table cell)


    tr.delete($head.start(-1) - 1, $head.end(-1) + 1);
    dispatch(tr.scrollIntoView());
  }

  return true;
}
function removeColumnCommand(state, dispatch) {
  // TODO: Cleanup
  var schema = state.schema;

  if (!inTable(state)) {
    return false;
  }

  if (dispatch) {
    var $head = state.selection.$head;
    var table = $head.node(-3); // remove entire table if this is the last remaining column

    if ($head.node(-1).childCount === 1) {
      return removeTableCommand(state, dispatch);
    }

    var cellIndex = $head.index(-1);
    var targetCell;
    var resolvedPositions = [];
    var tableOffset = $head.start(-3);
    table.descendants(function (node, pos) {
      if (!tableNodes(schema).includes(node.type)) {
        return false; // don't descend into non-table nodes
      }

      if (node.type === schema.nodes.table_row) {
        targetCell = node.childCount >= cellIndex + 1 ? node.child(cellIndex) : null;
      }

      if (targetCell && node == targetCell) {
        resolvedPositions.push(table.resolve(pos + 1));
      }
    });
    var tr = state.tr;

    for (var _iterator2 = resolvedPositions.reverse(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var cellPosition = _ref2;
      tr = tr.delete(tableOffset + cellPosition.start() - 1, tableOffset + cellPosition.end() + 1);
    }

    dispatch(tr.scrollIntoView());
  }

  return true;
}
function removeTableContentCommand(state, dispatch) {
  if (!inTable(state)) {
    return false;
  }

  var _state$selection = state.selection,
      $from = _state$selection.$from,
      $to = _state$selection.$to; // selection includes entire table

  if ($from.start(-3) >= $from.pos - 3 && $from.end(-3) <= $to.pos + 3) {
    return removeTableCommand(state, dispatch);
  } // selection includes entire row


  if ($from.start(-1) >= $from.pos - 1 && $from.end(-1) <= $to.pos + 1) {
    return removeRowCommand(state, dispatch);
  } // selection contains two arbitrary cells?
  // prevent delete operation to prevent deleting the cell nodes
  // themselves and breaking the table structure


  if (!$from.sameParent($to)) {
    return true;
  }

  return false;
}

function moveToCellCommand(state, dispatch, direction) {
  if (direction !== -1 && direction !== 1) {
    return false;
  }

  if (!inTable(state)) return false;
  var $head = state.selection.$head;

  for (var level = -1; level > -4; level--) {
    var parentIndex = $head.index(level);
    var parent = $head.node(level);
    if (!parent) continue; // every time we want to skip the boundaries of a node (a cell, a row, ...)
    // we have to consider the node's opening and closing positions, too. For
    // each level, this will add an additional offset of 2 that we need to skip

    var nodeOffset = 2;
    var target = parent.maybeChild(parentIndex + direction);
    if (!target) continue;
    var newPos = direction === -1 ? $head.start() - nodeOffset * (level * -1) : $head.end() + nodeOffset * (level * -1);
    dispatch(state.tr.setSelection(__webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").Selection.near(state.tr.doc.resolve(newPos), 1)).scrollIntoView());
    return true;
  } // we're at the end of the table and still want to move forward?
  // let's move the cursor below the table!


  if (direction === 1) {
    return moveSelectionAfterTableCommand(state, dispatch);
  } else {
    return moveSelectionBeforeTableCommand(state, dispatch);
  }
}

function moveToPreviousCellCommand(state, dispatch) {
  return moveToCellCommand(state, dispatch, -1);
}
function moveToNextCellCommand(state, dispatch) {
  return moveToCellCommand(state, dispatch, +1);
}

function removeTableCommand(state, dispatch) {
  var $head = state.selection.$head;

  if (dispatch) {
    dispatch(state.tr.deleteRange($head.start(-3) - 1, $head.end(-3) + 1));
  }

  return true;
}

function insertTableCommand(numRows, numCols, labelCells) {
  if (numRows === void 0) {
    numRows = 4;
  }

  if (numCols === void 0) {
    numCols = 3;
  }

  if (labelCells === void 0) {
    labelCells = true;
  }

  return function (state, dispatch) {
    // TODO: Clean this up
    var schema = state.schema; // TODO: Reenable this
    // if (!setBlockType(schema.nodes.table)(state)) {
    //     return false;
    // }

    if (!dispatch) return true;
    var headerIndex = 1;
    var cellIndex = 1;

    var cell = function cell() {
      return schema.nodes.table_cell.create(null, schema.text(labelCells ? "cell " + cellIndex++ : ' '));
    };

    var header = function header() {
      return schema.nodes.table_header.create(null, schema.text(labelCells ? "header " + headerIndex++ : ' '));
    };

    var row = function row() {
      for (var _len = arguments.length, cells = new Array(_len), _key = 0; _key < _len; _key++) {
        cells[_key] = arguments[_key];
      }

      return schema.nodes.table_row.create(null, cells);
    };

    var head = function head(row) {
      return schema.nodes.table_head.create(null, row);
    };

    var body = function body() {
      for (var _len2 = arguments.length, rows = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rows[_key2] = arguments[_key2];
      }

      return schema.nodes.table_body.create(null, rows);
    };

    var table = function table(head, body) {
      return schema.nodes.table.createChecked(null, [head, body]);
    };

    var paragraph = function paragraph() {
      return schema.nodes.paragraph.create(null);
    }; // !MODIFIED


    var t = table(head(row.apply(void 0, Array(numCols).fill(0).map(header))), body.apply(void 0, Array(numRows - 1).fill(0).map(function (_) {
      return row.apply(void 0, Array(numCols).fill(0).map(cell));
    }))); // !MODIFIED

    var tr = state.tr.replaceSelectionWith(t);
    dispatch(tr.scrollIntoView()); // if there's no selectable node after the inserted table, insert an empty paragraph
    // because it makes selecting, navigating much more intuitive

    var newState = state.apply(tr);
    var nodeAfterTable = newState.doc.nodeAt(newState.tr.selection.to - 1);

    if (nodeAfterTable && nodeAfterTable.type === schema.nodes.text) {
      tr = newState.tr.insert(newState.tr.selection.to, paragraph());
      dispatch(tr.scrollIntoView());
    }

    return true;
  };
}

/***/ }),

/***/ "./src/forum/proseMirror/tableKeymap.js":
/*!**********************************************!*\
  !*** ./src/forum/proseMirror/tableKeymap.js ***!
  \**********************************************/
/*! exports provided: tableKeymap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableKeymap", function() { return tableKeymap; });
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands */ "./src/forum/proseMirror/commands.js");

var tableKeymap = {
  'Mod-Enter': _commands__WEBPACK_IMPORTED_MODULE_0__["moveSelectionAfterTableCommand"],
  'Shift-Enter': _commands__WEBPACK_IMPORTED_MODULE_0__["moveSelectionAfterTableCommand"],
  Enter: _commands__WEBPACK_IMPORTED_MODULE_0__["moveToNextCellCommand"],
  Backspace: _commands__WEBPACK_IMPORTED_MODULE_0__["removeTableContentCommand"],
  Delete: _commands__WEBPACK_IMPORTED_MODULE_0__["removeTableContentCommand"],
  'Mod-Backspace': _commands__WEBPACK_IMPORTED_MODULE_0__["removeTableContentCommand"],
  'Mod-Delete': _commands__WEBPACK_IMPORTED_MODULE_0__["removeTableContentCommand"],
  Tab: _commands__WEBPACK_IMPORTED_MODULE_0__["moveToNextCellCommand"],
  'Shift-Tab': _commands__WEBPACK_IMPORTED_MODULE_0__["moveToPreviousCellCommand"]
};

/***/ }),

/***/ "./src/forum/proseMirror/tableSchema.js":
/*!**********************************************!*\
  !*** ./src/forum/proseMirror/tableSchema.js ***!
  \**********************************************/
/*! exports provided: tableNodeSpec, tableHeadNodeSpec, tableBodyNodeSpec, tableRowNodeSpec, tableCellNodeSpec, tableHeaderNodeSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableNodeSpec", function() { return tableNodeSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableHeadNodeSpec", function() { return tableHeadNodeSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableBodyNodeSpec", function() { return tableBodyNodeSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableRowNodeSpec", function() { return tableRowNodeSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableCellNodeSpec", function() { return tableCellNodeSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableHeaderNodeSpec", function() { return tableHeaderNodeSpec; });
var tableNodeSpec = {
  content: 'table_head table_body*',
  isolating: true,
  group: 'block',
  selectable: false,
  parseDOM: [{
    tag: 'table'
  }],
  toDOM: function toDOM() {
    return ['div', {
      class: 's-table-container'
    }, ['table', {
      class: 's-table'
    }, 0]];
  }
};
var tableHeadNodeSpec = {
  content: 'table_row',
  isolating: true,
  group: 'table_block',
  selectable: false,
  parseDOM: [{
    tag: 'thead'
  }],
  toDOM: function toDOM() {
    return ['thead', 0];
  }
};
var tableBodyNodeSpec = {
  content: 'table_row+',
  isolating: true,
  group: 'table_block',
  selectable: false,
  parseDOM: [{
    tag: 'tbody'
  }],
  toDOM: function toDOM() {
    return ['tbody', 0];
  }
};
var tableRowNodeSpec = {
  content: '(table_cell | table_header)+',
  isolating: true,
  group: 'table_block',
  selectable: false,
  parseDOM: [{
    tag: 'tr'
  }],
  toDOM: function toDOM() {
    return ['tr', 0];
  }
};
var tableCellNodeSpec = {
  content: 'inline*',
  isolating: true,
  group: 'table_block',
  selectable: false,
  attrs: {
    style: {
      default: null
    }
  },
  parseDOM: [{
    tag: 'td',
    getAttrs: function getAttrs(dom) {
      var textAlign = dom.style.textAlign;
      return textAlign ? {
        style: "text-align: " + textAlign
      } : null;
    }
  }],
  toDOM: function toDOM(node) {
    return ['td', node.attrs, 0];
  }
};
var tableHeaderNodeSpec = {
  content: 'inline*',
  isolating: true,
  group: 'table_block',
  selectable: false,
  attrs: {
    style: {
      default: null
    }
  },
  parseDOM: [{
    tag: 'th',
    getAttrs: function getAttrs(dom) {
      var textAlign = dom.style.textAlign;
      return textAlign ? {
        style: "text-align: " + textAlign
      } : null;
    }
  }],
  toDOM: function toDOM(node) {
    return ['th', node.attrs, 0];
  }
};

/***/ }),

/***/ "@askvortsov-rich-text":
/*!************************************************************!*\
  !*** external "flarum.extensions['askvortsov-rich-text']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.extensions['askvortsov-rich-text'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Separator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Separator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Separator'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/components/Post":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Post']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Post'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map