const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const port = 3000;

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: `${__dirname}/../pokedex.db`,
});

module.exports.envVars = {
	app,
	requires: {
		Sequelize,
		sequelize,
	},
};

const models = require(`${__dirname}/models/models`);
module.exports.envVars.models = models;

require(`${__dirname}/routes/test`);
require(`${__dirname}/routes/pokemon`);

app.listen(port, () => console.log(`Pokedex API listening on port ${port}!`));

