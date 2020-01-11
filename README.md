[![Build Status](https://travis-ci.com/CassandraSpruit/Serendipity.svg?branch=master)](https://travis-ci.com/CassandraSpruit/Serendipity)
[![codecov](https://codecov.io/gh/CassandraSpruit/Serendipity/branch/master/graph/badge.svg)](https://codecov.io/gh/CassandraSpruit/Serendipity)
[![npm](https://img.shields.io/npm/v/@cspruit/serendipity)](https://www.npmjs.com/package/@cspruit/serendipity)
[![license](https://img.shields.io/github/license/CassandraSpruit/Serendipity)](https://github.com/CassandraSpruit/Serendipity/blob/master/LICENSE)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

# Serendipity
_Math.random() for the rest of us._

Serendipity is a javascript library that generates custom random numbers.

Note that this currently just uses Math.random() for psuedo-random generation. If you need closer to true random, there are plenty and plenty of libraries made by people who know their stuff far better. 😉 This was created because I was stick of creating the same random function over and over again.

## Installation

- Install by running ```npm install --save-dev @cspruit/serendipity``` in the same directory as the package.json file lives.

## Usage
### Random
- Generates a random number based off of Math.random
    - max : number - optional - Max range, exclusive.
    - min : number - optional - Min range, inclusive
    - useFractions - optional - Unless this is true, will return an integer

```javascript
import {random} from '@cspruit/serendipity';

const randNormal = random(); // Returns 0-1, like Math.random()
const randMax = random(5); // Returns 0-4
const randMin = random(5, 1); // Returns 1-4
const randFloat = random(5, 1, true); // Returns a float from 1-4
```

## Contributing
All contributions, suggestions, and issues are welcome!

Check out the [Issues](https://github.com/CassandraSpruit/Zephyr/issues) page. In general anything listed is up for grabs, though bugs tend to be more detailed than enhancements and might be better to pick up if starting out.

## License
This project uses [GPL 3.0](https://github.com/CassandraSpruit/Vivi/blob/master/LICENSE).
