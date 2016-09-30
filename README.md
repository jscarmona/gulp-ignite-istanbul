# gulp-ignite-istanbul

[![Build Status](https://travis-ci.org/jscarmona/gulp-ignite-istanbul.svg?branch=master)](https://travis-ci.org/jscarmona/gulp-ignite-istanbul)
[![npm](https://img.shields.io/npm/dt/gulp-ignite-istanbul.svg?maxAge=2592000)]()
[![GitHub tag](https://img.shields.io/github/release/jscarmona/gulp-ignite-istanbul.svg?maxAge=2592000)]()

## install

**NPM**

```bash
$ npm install --save-dev gulp-ignite gulp-ignite-istanbul
```

## example

```js
import { task } from 'gulp-ignite';
import mocha from 'gulp-ignite-mocha';
import istanbul from 'gulp-ignite-istanbul';

task('test', mocha);
task('coverage', istanbul, { testTask: 'test' })
```

## usage

Run istanbul code coverage on src files.

```bash
$ gulp coverage
```

##### options
- `src` - The source file that should be used as the main entry point for your app. (**Default:** `[
    './client/app/*.js',
    '!./client/app/*.spec.js'
  ]`)
- `options` - Options to pass through to istanbul. Check out [options](https://github.com/SBoudrias/gulp-istanbul#istanbulopt) to see the full list. (**Default:** `{
    instrumenter: isparta.Instrumenter
  }`)
- `testTask` - The name of the gulp task to use.
- `reports` - Options to pass through to istanbul `writeReports`. Check out [options](https://github.com/SBoudrias/gulp-istanbul#istanbulwritereportsopt) to see the full list. (**Default:** `{}`)
- `thresholds` - Options to pass through to istanbul `enforceThresholds`. Check out [options](https://github.com/SBoudrias/gulp-istanbul#istanbulenforcethresholdsopt) to see the full list. (**Default:** `{}`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

## license

The MIT License (MIT)

Copyright (c) 2016 Javier Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
