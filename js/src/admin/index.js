import app from 'flarum/app';
import configureRichText from '../common/configureRichText';

app.initializers.add('askvortsov-markdown-tables', () => {
  configureRichText();
});
