const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

yargs.command({
	command: 'add',
	describe: 'Add notes',
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
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Remove notes',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});

yargs.command({
	command: 'list',
	describe: 'List notes',
	handler() {
		console.log("Listing notes v2");
	}
});

yargs.command({
	command: 'read',
	describe: 'Read notes',
	handler() {
		console.log('Reading notes');
	}
});

yargs.parse();
