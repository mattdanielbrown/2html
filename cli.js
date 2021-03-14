#!/usr/bin/env node
import meow from 'meow';
import 2html from './index.js';

const cli = meow(`
	Usage
	  $ 2html [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ 2html
	  unicorns & rainbows
	  $ 2html ponies
	  ponies & rainbows
`, {
	flags: {
		foo: {
			type: 'boolean'
		}
	}
});

console.log(2html(cli.input[0] || 'unicorns'));
