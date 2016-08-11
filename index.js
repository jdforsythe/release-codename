#! /usr/bin/env node
var generate = require('project-name-generator');
var commandLineArgs = require('command-line-args');
var color = require('cli-color');

const optionDefinitions = [
  {
    name: 'help',
    type: Boolean
  },
  {
    name: 'nodash',
    type: Boolean
  },
  {
    name: 'addnumber',
    type: Boolean
  },
  {
    name: 'words',
    type: Number
  },
  {
    name: 'count',
    type: Number
  },
  {
    name: 'alliterative',
    type: Boolean
  },
  {
    name: 'letter',
    type: String
  }
];

const options = commandLineArgs(optionDefinitions);

if (options.help) {
  console.log(color.yellow('release-codename [options]'));
  console.log(color.green('--nodash') + ' - output with spaces instead of using a dash');
  console.log(color.green('--addnumber') + ' - add a random number to the codename');
  console.log(color.green('--words=#') + ' - specify the number of words in the codename');
  console.log(color.green('--count=#') + ' - specify the number of codenames to display');
  console.log(color.green('--alliterative') + ' - make alliterative codenames');
  console.log(color.green('--letter="s"') + ' - make alliterative codenames starting with this letter');
  process.exit(0);
}

const genOptions = getGenOptions(options);

var codenames = [];

// default to 1 codename
if (!options.count)
  options.count = 1;

// default to dashes not spaces
if (options.nodash === undefined)
  options.nodash = false;

for (var i = 0, l = options.count; i < l; i++) {
  codenames.push(getCodename(options.nodash, genOptions));
}

if (options.count === 1)
  console.log(color.yellow.underline('Your codename is:'));
else
  console.log(color.yellow.underline('Your codenames are:'));

codenames.forEach(c => {
  console.log(color.red.bold(c));
});

////////////////////

function getGenOptions(opts) {
  var genOptions = {};
  var setOption = false;

  if (opts.words) {
    genOptions.words = opts.words;
    setOption = true;
  }

  if (opts.addnumber) {
    genOptions.number = true;
    setOption = true;
  }

  if (opts.alliterative) {
    genOptions.alliterative = true;
    setOption = true;
  }

  if (opts.letter) {
    genOptions.alliterative = opts.letter.substring(0, 1).toLowerCase();
    setOption = true;
  }

  return setOption ? genOptions : null;
}

function getCodename(useSpaces, genOptions) {
  return useSpaces ? generate(genOptions).spaced : generate(genOptions).dashed;
}
