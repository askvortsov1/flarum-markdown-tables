import { extend, override } from 'flarum/extend';
import TableDropdown from './components/TableDropdown';
import { tableKeymap } from './proseMirror/tableKeymap';
import {
  tableBodyNodeSpec,
  tableCellNodeSpec,
  tableHeaderNodeSpec,
  tableHeadNodeSpec,
  tableNodeSpec,
  tableRowNodeSpec,
} from './proseMirror/tableSchema';

export default function configureRichText() {
  if (!('askvortsov-rich-text' in flarum.extensions)) return;

  const ProseMirrorMenu = require('@askvortsov-rich-text').components.ProseMirrorMenu;

  const TableDropdownComponent = TableDropdown();

  extend(ProseMirrorMenu.prototype, 'items', function (items) {
    items.add(
      'table',
      TableDropdownComponent.component({
        type: 'table',
        icon: 'fas fa-table',
        tooltip: app.translator.trans('askvortsov-pipetables.forum.composer.table_tooltip'),
        state: this.attrs.state,
      }),
      10
    );
  });

  const MarkdownSerializerBuilder = require('@askvortsov-rich-text').proseMirror.markdown.MarkdownSerializerBuilder;

  extend(MarkdownSerializerBuilder.prototype, 'buildNodes', function (nodes) {
    const richTextSchema = this.schema;
    nodes.table = function table(state, node) {
      function serializeTableHead(head) {
        let columnAlignments = [];
        head.forEach((headRow) => {
          if (headRow.type === richTextSchema.nodes.table_row) {
            columnAlignments = serializeTableRow(headRow);
          }
        });

        // write table header separator
        for (const alignment of columnAlignments) {
          state.write('|');

          state.write(alignment === 'left' || alignment === 'center' ? ':' : ' ');
          state.write('---');
          state.write(alignment === 'right' || alignment === 'center' ? ':' : ' ');
        }
        state.write('|');
        state.ensureNewLine();
      }

      function serializeTableBody(body) {
        body.forEach((bodyRow) => {
          if (bodyRow.type === richTextSchema.nodes.table_row) {
            serializeTableRow(bodyRow);
          }
        });
        state.ensureNewLine();
      }

      function serializeTableRow(row) {
        const columnAlignment = [];
        row.forEach((cell) => {
          if (cell.type === richTextSchema.nodes.table_header || cell.type === richTextSchema.nodes.table_cell) {
            const alignment = serializeTableCell(cell);
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
        const alignment = cell.attrs.style;
        if (!alignment) {
          return null;
        }

        // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
        const match = alignment.match(/text-align:[ ]?(left|right|center)/);

        if (match && match[1]) {
          return match[1];
        }

        return null;
      }

      // TODO: don't rely on node names
      node.forEach((table_child) => {
        if (table_child.type.name === 'table_head') serializeTableHead(table_child);
        if (table_child.type.name === 'table_body') serializeTableBody(table_child);
      });

      state.ensureNewLine();
      state.write('\n');
    };
  });

  const MarkdownParserBuilder = require('@askvortsov-rich-text').proseMirror.markdown.MarkdownParserBuilder;

  extend(MarkdownParserBuilder.prototype, 'buildTokens', function (tokens) {
    Object.assign(tokens, {
      table: {
        block: 'table',
      },

      thead: {
        block: 'table_head',
      },

      tbody: {
        block: 'table_body',
      },

      th: {
        block: 'table_header',
        getAttrs: (tok) => ({
          style: tok.attrGet('style'),
        }),
      },

      tr: {
        block: 'table_row',
      },

      td: {
        block: 'table_cell',
        getAttrs: (tok) => ({
          style: tok.attrGet('style'),
        }),
      },
    });
  });

  extend(MarkdownParserBuilder.prototype, 'buildTokenizer', function (tokenizer) {
    tokenizer.enable('table');
  });

  const SchemaBuilder = require('@askvortsov-rich-text').proseMirror.markdown.SchemaBuilder;

  override(SchemaBuilder.prototype, 'buildNodes', function (original) {
    const nodes = original();

    return nodes
      .addBefore('image', 'table', tableNodeSpec)
      .addBefore('image', 'table_head', tableHeadNodeSpec)
      .addBefore('image', 'table_body', tableBodyNodeSpec)
      .addBefore('image', 'table_row', tableRowNodeSpec)
      .addBefore('image', 'table_cell', tableCellNodeSpec)
      .addBefore('image', 'table_header', tableHeaderNodeSpec);
  });

  const ProseMirrorEditorDriver = require('@askvortsov-rich-text').proseMirror.ProseMirrorEditorDriver;

  extend(ProseMirrorEditorDriver.prototype, 'buildPluginItems', function (items) {
    items.add('tableKeymap', require('@askvortsov-rich-text').keymap(tableKeymap), 10);
  });
}
