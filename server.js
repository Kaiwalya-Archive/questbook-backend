const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sample = {
	profilePicture: 'https://i.imgur.com/R4ikJd1.jpg',
	username: 'Andreas Brixen',
	posts: [
		{
			postImg: 'https://i.imgur.com/l8rN74g.png',
			caption: 'A good old book.',
		},
	],
	points: 80,
};

app.get('/posts', function (req, res) {
	res.json(sample);
});

app.listen(PORT, function () {
	console.log('listening on port: ' + PORT);
});