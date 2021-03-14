# 2html

> CLI for converting HTML to PDF, and markup preprocessor files to/from HTML.

## Install

```
$ npm install 2html
```

## Usage

```js
import 2html from '2html';

2html('unicorns');
//=> 'unicorns & rainbows'
```

## API

### 2html(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.

## CLI

```
$ npm install --global 2html
```

```
$ 2html --help

  Usage
    2html [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ 2html
    unicorns & rainbows
    $ 2html ponies
    ponies & rainbows
```
