import Button from 'flarum/common/components/Button';
import Dropdown from 'flarum/common/components/Dropdown';
import icon from 'flarum/common/helpers/icon';
import listItems from 'flarum/common/helpers/listItems';
import { insertTableColumnAfterCommand, insertTableColumnBeforeCommand, insertTableCommand, insertTableRowBeforeCommand, insertTableRowAfterCommand, inTable, removeColumnCommand, removeRowCommand } from '../proseMirror/commands';

export default class TableDropdown extends Dropdown {
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
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.$('[data-toggle="tooltip"]').tooltip();
    this.$().on('click', this.onclick.bind(this));
  }

  getButton(children) {
    return (
      <button className="Dropdown-toggle Button Button--icon Button--link Button--menuDropdown" data-toggle="dropdown">
        <span data-toggle="tooltip" title={this.attrs.tooltip}>
          {icon(this.attrs.icon)}
        </span>
      </button>
    );
  }

  getMenu(items) {
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

  inTable() {
    return inTable(this.attrs.state.editorView.state);
  }

  onclick(e) {
    if (!this.inTable()) {
      this.command = insertTableCommand;
      this.state.run(this.attrs.type);
      e.preventDefault();
      e.stopPropagation();
    }
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
}
