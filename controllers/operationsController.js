const path = require('path');
const feed = require('../dev-data/data/feed.json');
const fs = require('fs');

exports.getFeed = (req, res) => {
	res.status(200).json({
		status: 'success',
		results: feed.length,
		data: {
			feed,
		},
	});
};

exports.createFeed = (req, res) => {
	const newFeed = req.body;
	feed.push(newFeed);

	fs.writeFile(
		path.join(__dirname, '../dev-data/data/feed.json'),
		JSON.stringify(feed),
		(err) => {
			res.status(201).json({
				status: 'success',
				data: {
					feed,
				},
			});
		}
	);
};
