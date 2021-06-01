const esprima = require('esprima');
const escodegen = require('escodegen');
const fs = require('fs');
const { deob_string } = require('./deob_string.js');
var source;

function CallExpression(node){

	return (node.type == 'CallExpression');

};

function read_source(){

	source = fs.readFileSync('./source.js', 'utf8');

};

function deobfuscate_source(){

	esprima.parse(source, { range : true }, (node,meta) => {

		if(CallExpression(node)){

			try{

				if(node['arguments'][0]['value'].startsWith('Kg1')){

					if(node['arguments'][0]['value'].startsWith('Kg1')){

						node['callee']['name'] = '';
						node['arguments'][0]['value'] = deob_string(node['arguments'][0]['value']);


					};

				};

			} catch{};

		};

		source = escodegen.generate(node);

	});

};

function write_source(){

	fs.writeFileSync('./deobfuscated_source.js', source, 'utf8');

};

async function deobfuscate(){

	await read_source();
	await deobfuscate_source();
	await write_source();

};

deobfuscate();
