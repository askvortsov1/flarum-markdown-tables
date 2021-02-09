import app from 'flarum/app';
import { extend } from 'flarum/extend'
import Post from 'flarum/components/Post'
import configureRichText from './configureRichText';

app.initializers.add('askvortsov-pipetables', () => {
	extend(Post.prototype, 'oncreate', function () {
		function addDataLabelsToTable(table) {
			let labels = [];
			for (let th of table.getElementsByTagName('th')) {
				labels.push(th.textContent);
			}
			for (let tr of table.getElementsByTagName('tr')) {
				let i = -1;
				for (let td of tr.getElementsByTagName('td')) {
					td.setAttribute('data-label', labels[++i] || '');
				}
			}
		}
		for (let table of document.getElementsByTagName('table')) {
			addDataLabelsToTable(table);
		}
	});

	if ('askvortsov-rich-text' in flarum.extensions) {
		configureRichText();
	}
});
