
# cronverter [![npm](https://img.shields.io/npm/v/cronverter.svg)](https://npmjs.com/package/cronverter)

[![Unit Test](https://github.com/4xii/cronverter/actions/workflows/unit-test.yml/badge.svg)](https://github.com/4xii/cronverter/actions/workflows/unit-test.yml)

Cronverter is a utility tool designed to convert crontab entries to and from JSON format. This tool provides a convenient way to work with crontab schedules in a structured and easily manipulatable format like JSON.

## Features

- Convert a crontab string to an array of JSON objects.
- Convert an array of JSON objects to a crontab string.
- Validate the format of the crontab and JSON inputs to ensure accuracy.
- Package manager [pnpm](https://pnpm.js.org/), safe and fast
- Bundle with [tsup](https://github.com/egoist/tsup)
- Test with [Vitest](https://vitest.dev)

## Install

You can install Cronverter via npm or yarn:

```bash
npm i cronverter
```

or

```bash
yarn add cronverter
```

## Usage

Import `Cronverter` in your JavaScript or TypeScript project:

```javascript
import CrontabConverter from 'cronverter';
```

### Converting Crontab to JSON

```javascript
const crontab = `0 5 * * * /path/to/command1
30 6 * * * /path/to/command2
15 14 1 * * /path/to/command3`;

const json = CrontabConverter.crontabToJson(crontab);
console.log(json);
```

Output:

```json
[
  { "schedule": "0 5 * * *", "task": "/path/to/command1" },
  { "schedule": "30 6 * * *", "task": "/path/to/command2" },
  { "schedule": "15 14 1 * *", "task": "/path/to/command3" }
]
```

### Converting JSON to Crontab

```javascript
const json = [
  { "schedule": "0 5 * * *", "task": "/path/to/command1" },
  { "schedule": "30 6 * * *", "task": "/path/to/command2" },
  { "schedule": "15 14 1 * *", "task": "/path/to/command3" }
];

const crontab = CrontabConverter.jsonToCrontab(json);
console.log(crontab);
```

Output:

```sh
0 5 * * * /path/to/command1
30 6 * * * /path/to/command2
15 14 1 * * /path/to/command3
```

## Contributing

Contributions to Cronverter are welcome. Please feel free to submit pull requests or create issues for bugs and feature requests.

## License

[MIT](./LICENSE) License © 2024 [4xii](https://github.com/4xii)
