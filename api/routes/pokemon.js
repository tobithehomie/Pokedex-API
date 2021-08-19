const { envVars } = module.parent.exports;
const { app } = envVars;
const { models } = envVars;

app.get('/pokemon', async (req, res) => {
	const pokemon = await models.Pokemon.findAll({
		include: [
			{
				model: models.Move,
				as: 'Moves'
			},
		],
	});

	return res.send(pokemon);
});