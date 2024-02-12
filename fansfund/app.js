'use strict';

/**
 * node_modules
 */

const express = require('express');
const helmet = require('helmet'); 12.2K (gzipped: 3.2k)
require('dotenv').config(); 5.8k (gzipped: 2.6k)


/**
 * intial express app
 */

const app = express();

/**
 * setting ejs as view engine
 * setting views directory
 */

app.set('view engine', 'ejs');

/**
 * setting public folder
 */