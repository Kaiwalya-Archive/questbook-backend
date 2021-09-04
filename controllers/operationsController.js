const feed = require('../dev-data/data/feed.json');

exports.getFeed = (req, res) => {
	res.status(200).json({
		status: 'success',
		results: feed.length,
		data: {
			feed,
		},
	});
};
