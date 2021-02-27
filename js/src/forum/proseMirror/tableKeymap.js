import { moveSelectionAfterTableCommand, moveToNextCellCommand, moveToPreviousCellCommand, removeTableContentCommand } from './commands';

export const tableKeymap = {
  'Mod-Enter': moveSelectionAfterTableCommand,
  'Shift-Enter': moveSelectionAfterTableCommand,
  Enter: moveToNextCellCommand,
  Backspace: removeTableContentCommand,
  Delete: removeTableContentCommand,
  'Mod-Backspace': removeTableContentCommand,
  'Mod-Delete': removeTableContentCommand,
  Tab: moveToNextCellCommand,
  'Shift-Tab': moveToPreviousCellCommand,
};
