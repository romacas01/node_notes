const getNotes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
	command: 'add',
	description: 'Add notes',
	builder: {
		title: {
			describe: 'note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		console.log("Title: " + argv.title);
		console.log("Body: " + argv.body);
	}
});

yargs.command({
	command: 'remove',
	description: 'Remove notes',
	handler: function() {
		console.log('removing notes');
	}
});

yargs.command({
	command: 'list',
	description: 'List notes',
	handler: function() {
		console.log("Listing notes v2");
	}
});

yargs.command({
	command: 'read',
	description: 'Read notes',
	handler: function() {
		console.log('Reading notes');
	}
});

yargs.parse();
