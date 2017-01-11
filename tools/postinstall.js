#!/usr/bin/env node

var path = require('path');
var prepend = require('prepend-file');
var findUp = require('find-up')

var CHARTJS_FIXED_FILE = ['chart.js', 'src', 'core', 'core.helpers.js'];
var REACT_CHARTJS_2_FILE = ['react-chartjs-2', 'node_modules', 'chart.js', 'src', 'core', 'core.helpers.js'];

var FIXED_CODE = '// < HACK >\n'
  +'if (!process.env.BROWSER) {\n'
  +'  global.window = {};\n'
  +'}\n// </ HACK >\n\n';

function hackChartJs() {
  findUp('node_modules')
    .then(nodeModules => prepend(
      path.resolve.apply(path, [nodeModules].concat(CHARTJS_FIXED_FILE)),
      FIXED_CODE,
      console.log
    ));
}

function hackReactChartJs2() {
  findUp('node_modules')
    .then(nodeModules => prepend(
      path.resolve.apply(path, [nodeModules].concat(REACT_CHARTJS_2_FILE)),
      FIXED_CODE,
      console.log
    ));
}

hackChartJs();
hackReactChartJs2();
