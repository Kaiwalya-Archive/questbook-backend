/* eslint-disable */

const path = require('path');
const feed = require('../dev-data/data/feed.json');
const fs = require('fs');
exports.getFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});
	const postsCollection = astraClient.namespace("posts").collection("postsCollection");
	// const post = await postsCollection.create({
	// 	"profilePicture": "https://i.imgur.com/R4ikJd1.jpg",
	// 	"username": "Andreas Brixen",
	// 	"postImg": "https://i.imgur.com/l8rN74g.png",
	// 	"caption": "A good old book.",
	// 	"points": 80
	// });
	const posts = await postsCollection.find({});
	const response = Object.keys(posts).map((key) => ({
		id: key,
		...posts[key]
	}));
	res.json(response);
};

exports.createFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const postsCollection = astraClient.namespace("posts").collection("postsCollection");
	const post = await postsCollection.create({
		"profilePicture": req.body.profilePicture,
		"username": req.body.username,
		"postImg": req.body.postImg,
		"caption": req.body.caption,
		"points": req.body.points
	});
};