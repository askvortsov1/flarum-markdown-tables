import Button from 'flarum/common/components/Button';
import Switch from 'flarum/common/components/Switch';
import listItems from 'flarum/common/helpers/listItems';
import extractText from 'flarum/common/utils/extractText';
import Stream from 'flarum/common/utils/Stream';
import { insertTableColumnAfterCommand, insertTableColumnBeforeCommand, insertTableCommand, insertTableRowBeforeCommand, insertTableRowAfterCommand, inTable, removeColumnCommand, removeRowCommand } from '../proseMirror/commands';

// TODO: is there a cleaner way to do this?
const FormDropdown = "askvortsov-rich-text" in flarum.extensions ? require('@askvortsov-rich-text').components.FormDropdown : Object;

export default class TableDropdown extends FormDropdown {
  oninit(vnode) {
    super.oninit(vnode);

    this.state = this.attrs.state;
    this.state.addItem(
      this.attrs.type,
      (state, dispatch) => {
        return this.command(state, dispatch);
      },
      this.onEditorUpdate.bind(this)
    );

    this.numCols = Stream(3);
    this.numRows = Stream(4);
    this.labelCells = Stream(true);
  }

  getMenu(items) {
    if (!this.inTable()) {
      return super.getMenu(items);
    }

    const commands = [
      {
        translation: 'remove_column',
        command: removeColumnCommand
      },
      {
        translation: 'insert_column_before',
        command: insertTableColumnBeforeCommand
      },
      {
        translation: 'insert_column_after',
        command: insertTableColumnAfterCommand
      },
      {
        translation: 'remove_row',
        command: removeRowCommand
      },
      {
        translation: 'insert_row_before',
        command: insertTableRowBeforeCommand
      },
      {
        translation: 'insert_row_after',
        command: insertTableRowAfterCommand
      },
    ];

    return (
      <ul className={'Dropdown-menu dropdown-menu TableDropdownMenu'}>
        {listItems(commands.map(command => <Button
          onclick={this.click.bind(this, command.command)}
          onkeydown={this.keydown.bind(this, command.command)}>
          {app.translator.trans(`askvortsov-pipetables.forum.composer.table_menu.${command.translation}`)}
        </Button>))}
      </ul>
    );
  }

  fields() {
    const items = super.fields();

    items.add(
      'numCols',
      <div className="Form-group">
        <label>{app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_cols')}</label>
        <input
          className="FormControl"
          name="numCols"
          type="number"
          placeholder={extractText(app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_cols'))}
          bidi={this.numCols}
          required
        />
      </div>,
      10
    );

    items.add(
      'numRows',
      <div className="Form-group">
        <label>{app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_rows')}</label>
        <input
          className="FormControl"
          name="numRows"
          type="number"
          placeholder={extractText(app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.num_rows'))}
          bidi={this.numRows}
          required
        />
      </div>,
      10
    );

    items.add(
      'labelCells',

      <div className="Form-group">
        {Switch.component({
          state: this.labelCells(),
          onchange: this.labelCells
        }, app.translator.trans('askvortsov-pipetables.forum.composer.table_menu.label_cells'))}
      </div>,
      9
    )


    return items;
  }

  inTable() {
    return inTable(this.attrs.state.editorView.state);
  }

  onEditorUpdate() {
    this.currInTable = this.inTable();
  }

  keydown(command, e) {
    if (e.key === ' ' || e.key === 'Enter') {
      this.click(command, e);
    }
  }

  click(command, e) {
    e.preventDefault();
    this.command = command;
    return this.state.run(this.attrs.type);
  }

  insert() {
    if (!this.inTable()) {
      this.command = insertTableCommand(parseInt(this.numRows()), parseInt(this.numCols()), this.labelCells());
      this.state.run(this.attrs.type);
    }
  }
}
