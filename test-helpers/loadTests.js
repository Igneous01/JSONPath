/* globals loadJS, nodeunit, suites */
/* eslint-disable strict, import/unambiguous */
'use strict';
[
    'test.all.js',
    'test.arr.js',
    'test.at_and_dollar.js',
    'test.callback.js',
    'test.custom-properties.js',
    'test.escaping.js',
    'test.eval.js',
    'test.examples.js',
    'test.intermixed.arr.js',
    'test.parent-selector.js',
    'test.path_expressions.js',
    'test.pointer.js',
    'test.properties.js',
    'test.return.js',
    'test.toPath.js',
    'test.toPointer.js',
    'test.type-operators.js'
].forEach((item) => loadJS(item));
nodeunit.run(suites);
