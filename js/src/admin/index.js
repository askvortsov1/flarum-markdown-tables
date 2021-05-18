import app from 'flarum/app';
import configureRichText from '../common/configureRichText';

app.initializers.add('askvortsov-pipetables', () => {
  configureRichText();
});
