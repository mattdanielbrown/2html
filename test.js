import test from 'ava';
import 2html from './index.js';

test('title', t => {
	t.throws(() => {
		2html(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(2html('unicorns'), 'unicorns & rainbows');
});
