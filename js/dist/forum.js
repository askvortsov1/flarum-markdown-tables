module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=flarum.extensions["askvortsov-rich-text"]},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["common/utils/Stream"]},function(e,t){e.exports=flarum.core.compat["common/utils/extractText"]},function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["components/Post"]},function(e,t){e.exports=flarum.core.compat["common/components/Button"]},function(e,t){e.exports=flarum.core.compat["common/components/Switch"]},function(e,t){e.exports=flarum.core.compat["common/helpers/listItems"]},function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),a=r(1),l=r(5),i=r.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=r(6),u=r.n(c),d=r(7),f=r.n(d),p=r(8),b=r.n(p),v=r(3),h=r.n(v),y=r(2),_=r.n(y);function g(e){return[e.nodes.table,e.nodes.table_head,e.nodes.table_body,e.nodes.table_row,e.nodes.table_cell,e.nodes.table_header]}function w(e){return g(e.schema).includes(e.selection.$head.parent.type)}function k(e){return e.selection.$head.parent.type===e.schema.nodes.table_header}function x(e,t){return M(e,t,!1)}function M(e,t,n){void 0===n&&(n=!1);var o=e.schema;if(!w(e))return!1;if(t){var a=o.nodes.paragraph,l=n?e.selection.$head.before(-3)-1:e.selection.$head.after(-3)+1,i=e.tr;try{i.doc.resolve(l)}catch(e){var s=n?l+1:l-1;i.insert(s,a.create())}i.setSelection(r(0).Selection.near(i.doc.resolve(Math.max(0,l)),1)),t(i.scrollIntoView())}return!0}function O(e,t){return S(!0,e,t)}function A(e,t){return S(!1,e,t)}function S(e,t,r){var n=t.schema;if(!w(t)||k(t))return!1;if(r){var o=t.selection.$head,a=o.node(-1),l=[];a.forEach(function(e){l.push(n.nodes.table_cell.create(e.attrs))});var i=n.nodes.table_row.create(null,l),s=e?o.before(-1):o.after(-1);r(t.tr.insert(s,i).scrollIntoView())}return!0}function D(e,t){return j(!1,e,t)}function C(e,t){return j(!0,e,t)}function j(e,t,r){var n=t.schema;if(!w(t))return!1;if(r){var o,a=t.selection.$head,l=a.node(-3),i=a.index(-1),s=[],c=a.start(-3);l.descendants(function(t,r){if(!g(n).includes(t.type))return!1;if(t.type===n.nodes.table_row&&(o=t.child(i)),o&&t==o){var a=e?l.resolve(r+1).before():l.resolve(r+1).after();s.push([t.type,c+a])}});var u=t.tr,d=s.reverse(),f=Array.isArray(d),p=0;for(d=f?d:d[Symbol.iterator]();;){var m;if(f){if(p>=d.length)break;m=d[p++]}else{if((p=d.next()).done)break;m=p.value}var b=m;u=u.insert(b[1],b[0].create())}r(u.scrollIntoView())}return!0}function T(e,t){if(!w(e)||k(e))return!1;if(t){var r=e.tr,n=e.selection.$head;if(1===n.node(-2).childCount)return P(e,t);r.delete(n.start(-1)-1,n.end(-1)+1),t(r.scrollIntoView())}return!0}function B(e,t){var r=e.schema;if(!w(e))return!1;if(t){var n=e.selection.$head,o=n.node(-3);if(1===n.node(-1).childCount)return P(e,t);var a,l=n.index(-1),i=[],s=n.start(-3);o.descendants(function(e,t){if(!g(r).includes(e.type))return!1;e.type===r.nodes.table_row&&(a=e.childCount>=l+1?e.child(l):null),a&&e==a&&i.push(o.resolve(t+1))});var c=e.tr,u=i.reverse(),d=Array.isArray(u),f=0;for(u=d?u:u[Symbol.iterator]();;){var p;if(d){if(f>=u.length)break;p=u[f++]}else{if((f=u.next()).done)break;p=f.value}var m=p;c=c.delete(s+m.start()-1,s+m.end()+1)}t(c.scrollIntoView())}return!0}function E(e,t){if(!w(e))return!1;var r=e.selection,n=r.$from,o=r.$to;return n.start(-3)>=n.pos-3&&n.end(-3)<=o.pos+3?P(e,t):n.start(-1)>=n.pos-1&&n.end(-1)<=o.pos+1?T(e,t):!n.sameParent(o)}function N(e,t,n){if(-1!==n&&1!==n)return!1;if(!w(e))return!1;for(var o=e.selection.$head,a=-1;a>-4;a--){var l=o.index(a),i=o.node(a);if(i){if(i.maybeChild(l+n)){var s=-1===n?o.start()- -1*a*2:o.end()+-1*a*2;return t(e.tr.setSelection(r(0).Selection.near(e.tr.doc.resolve(s),1)).scrollIntoView()),!0}}}return 1===n?x(e,t):function(e,t){return M(e,t,!0)}(e,t)}function I(e,t){return N(e,t,1)}function P(e,t){var r=e.selection.$head;return t&&t(e.tr.deleteRange(r.start(-3)-1,r.end(-3)+1)),!0}function $(){return function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.oninit=function(t){var r=this;e.prototype.oninit.call(this,t),this.state=this.attrs.state,this.state.addItem(this.attrs.type,function(e,t){return r.command(e,t)},this.onEditorUpdate.bind(this)),this.numCols=_()(3),this.numRows=_()(4),this.labelCells=_()(!0)},o.getMenu=function(t){var r=this;if(!this.inTable())return e.prototype.getMenu.call(this,t);var n=[{translation:"remove_column",command:B},{translation:"insert_column_before",command:C},{translation:"insert_column_after",command:D},{translation:"remove_row",command:T},{translation:"insert_row_before",command:O},{translation:"insert_row_after",command:A}];return m("ul",{className:"Dropdown-menu dropdown-menu TableDropdownMenu"},b()(n.map(function(e){return m(u.a,{onclick:r.click.bind(r,e.command),onkeydown:r.keydown.bind(r,e.command)},app.translator.trans("askvortsov-pipetables.forum.composer.table_menu."+e.translation))})))},o.fields=function(){var t=e.prototype.fields.call(this);return t.add("numCols",m("div",{className:"Form-group"},m("label",null,app.translator.trans("askvortsov-pipetables.forum.composer.table_menu.num_cols")),m("input",{className:"FormControl",name:"numCols",type:"number",placeholder:h()(app.translator.trans("askvortsov-pipetables.forum.composer.table_menu.num_cols")),bidi:this.numCols,required:!0})),10),t.add("numRows",m("div",{className:"Form-group"},m("label",null,app.translator.trans("askvortsov-pipetables.forum.composer.table_menu.num_rows")),m("input",{className:"FormControl",name:"numRows",type:"number",placeholder:h()(app.translator.trans("askvortsov-pipetables.forum.composer.table_menu.num_rows")),bidi:this.numRows,required:!0})),10),t.add("labelCells",m("div",{className:"Form-group"},f.a.component({state:this.labelCells(),onchange:this.labelCells},app.translator.trans("askvortsov-pipetables.forum.composer.table_menu.label_cells"))),9),t},o.inTable=function(){return w(this.attrs.state.editorView.state)},o.onEditorUpdate=function(){this.currInTable=this.inTable()},o.keydown=function(e,t){" "!==t.key&&"Enter"!==t.key||this.click(e,t)},o.click=function(e,t){return t.preventDefault(),this.command=e,this.state.run(this.attrs.type)},o.insert=function(){var e,t,r;this.inTable()||(this.command=(e=parseInt(this.numRows()),t=parseInt(this.numCols()),r=this.labelCells(),void 0===e&&(e=4),void 0===t&&(t=3),void 0===r&&(r=!0),function(n,o){var a=n.schema;if(!o)return!0;var l=1,i=1,s=function(){return a.nodes.table_cell.create(null,a.text(r?"cell "+i++:" "))},c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.nodes.table_row.create(null,t)},u=function(e,t){return a.nodes.table.createChecked(null,[e,t])}(function(e){return a.nodes.table_head.create(null,e)}(c.apply(void 0,Array(t).fill(0).map(function(){return a.nodes.table_header.create(null,a.text(r?"header "+l++:" "))}))),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.nodes.table_body.create(null,t)}.apply(void 0,Array(e-1).fill(0).map(function(e){return c.apply(void 0,Array(t).fill(0).map(s))}))),d=n.tr.replaceSelectionWith(u);o(d.scrollIntoView());var f=n.apply(d),p=f.doc.nodeAt(f.tr.selection.to-1);return p&&p.type===a.nodes.text&&o((d=f.tr.insert(f.tr.selection.to,a.nodes.paragraph.create(null))).scrollIntoView()),!0}),this.state.run(this.attrs.type))},n}(r(0).components.FormDropdown)}var V={"Mod-Enter":x,"Shift-Enter":x,Enter:I,Backspace:E,Delete:E,"Mod-Backspace":E,"Mod-Delete":E,Tab:I,"Shift-Tab":function(e,t){return N(e,t,-1)}},F={content:"table_head table_body*",isolating:!0,group:"block",selectable:!1,parseDOM:[{tag:"table"}],toDOM:function(){return["div",{class:"s-table-container"},["table",{class:"s-table"},0]]}},R={content:"table_row",isolating:!0,group:"table_block",selectable:!1,parseDOM:[{tag:"thead"}],toDOM:function(){return["thead",0]}},L={content:"table_row+",isolating:!0,group:"table_block",selectable:!1,parseDOM:[{tag:"tbody"}],toDOM:function(){return["tbody",0]}},z={content:"(table_cell | table_header)+",isolating:!0,group:"table_block",selectable:!1,parseDOM:[{tag:"tr"}],toDOM:function(){return["tr",0]}},q={content:"inline*",isolating:!0,group:"table_block",selectable:!1,attrs:{style:{default:null}},parseDOM:[{tag:"td",getAttrs:function(e){var t=e.style.textAlign;return t?{style:"text-align: "+t}:null}}],toDOM:function(e){return["td",e.attrs,0]}},G={content:"inline*",isolating:!0,group:"table_block",selectable:!1,attrs:{style:{default:null}},parseDOM:[{tag:"th",getAttrs:function(e){var t=e.style.textAlign;return t?{style:"text-align: "+t}:null}}],toDOM:function(e){return["th",e.attrs,0]}};function U(){if("askvortsov-rich-text"in flarum.extensions){var e=r(0).components.ProseMirrorMenu,t=$();Object(a.extend)(e.prototype,"items",function(e){e.add("table",t.component({type:"table",icon:"fas fa-table",tooltip:app.translator.trans("askvortsov-pipetables.forum.composer.table_tooltip"),state:this.attrs.state}),10)});var n=r(0).proseMirror.markdown.MarkdownSerializerBuilder;Object(a.extend)(n.prototype,"buildNodes",function(e){var t=this.schema;e.table=function(e,r){function n(r){var n=[];return r.forEach(function(r){if(r.type===t.nodes.table_header||r.type===t.nodes.table_cell){var o=function(t){return e.write("| "),e.renderInline(t),e.write(" "),function(e){var t=e.attrs.style;if(!t)return null;var r=t.match(/text-align:[ ]?(left|right|center)/);return r&&r[1]?r[1]:null}(t)}(r);n.push(o)}}),e.write("|"),e.ensureNewLine(),n}r.forEach(function(r){"table_head"===r.type.name&&function(r){var o=[];r.forEach(function(e){e.type===t.nodes.table_row&&(o=n(e))});var a=o,l=Array.isArray(a),i=0;for(a=l?a:a[Symbol.iterator]();;){var s;if(l){if(i>=a.length)break;s=a[i++]}else{if((i=a.next()).done)break;s=i.value}var c=s;e.write("|"),e.write("left"===c||"center"===c?":":" "),e.write("---"),e.write("right"===c||"center"===c?":":" ")}e.write("|"),e.ensureNewLine()}(r),"table_body"===r.type.name&&(r.forEach(function(e){e.type===t.nodes.table_row&&n(e)}),e.ensureNewLine())}),e.ensureNewLine(),e.write("\n")}});var o=r(0).proseMirror.markdown.MarkdownParserBuilder;Object(a.extend)(o.prototype,"buildTokens",function(e){s(e,{table:{block:"table"},thead:{block:"table_head"},tbody:{block:"table_body"},th:{block:"table_header",getAttrs:function(e){return{style:e.attrGet("style")}}},tr:{block:"table_row"},td:{block:"table_cell",getAttrs:function(e){return{style:e.attrGet("style")}}}})}),Object(a.extend)(o.prototype,"buildTokenizer",function(e){e.enable("table")});var l=r(0).proseMirror.markdown.SchemaBuilder;Object(a.override)(l.prototype,"buildNodes",function(e){return e().addBefore("image","table",F).addBefore("image","table_head",R).addBefore("image","table_body",L).addBefore("image","table_row",z).addBefore("image","table_cell",q).addBefore("image","table_header",G)});var i=r(0).proseMirror.ProseMirrorEditorDriver;Object(a.extend)(i.prototype,"buildPluginItems",function(e){e.add("tableKeymap",r(0).keymap(V),10)})}}o.a.initializers.add("askvortsov-pipetables",function(){Object(a.extend)(i.a.prototype,"oncreate",function(){function e(e){var t=[],r=e.getElementsByTagName("th"),n=Array.isArray(r),o=0;for(r=n?r:r[Symbol.iterator]();;){var a;if(n){if(o>=r.length)break;a=r[o++]}else{if((o=r.next()).done)break;a=o.value}var l=a;t.push(l.textContent)}var i=e.getElementsByTagName("tr"),s=Array.isArray(i),c=0;for(i=s?i:i[Symbol.iterator]();;){var u;if(s){if(c>=i.length)break;u=i[c++]}else{if((c=i.next()).done)break;u=c.value}var d=-1,f=u.getElementsByTagName("td"),p=Array.isArray(f),m=0;for(f=p?f:f[Symbol.iterator]();;){var b;if(p){if(m>=f.length)break;b=f[m++]}else{if((m=f.next()).done)break;b=m.value}b.setAttribute("data-label",t[++d]||"")}}}var t=document.getElementsByTagName("table"),r=Array.isArray(t),n=0;for(t=r?t:t[Symbol.iterator]();;){var o;if(r){if(n>=t.length)break;o=t[n++]}else{if((n=t.next()).done)break;o=n.value}e(o)}}),"askvortsov-rich-text"in flarum.extensions&&U()})}]);
//# sourceMappingURL=forum.js.map