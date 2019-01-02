const redis = require('redis');
// Redis API does not support promises yet, gotta use old callbacks.

const db = await redis.createClient(); // Connects to a Redis server at home ip 127.0.0.1 and port 6379 by default

db.on('connect', () => {
	console.log('Redis client connected');
});	

await db.on('error', (error) => {
	throw new Error(error);
});

// Example basic operations
db.set('KEY', 'VALUE', redis.print);
db.get('KEY', redis.print); // Can have a custom callback to handle the result of the query, tho redis.print is handy

// Don't forget to close the connection with Redis server after finishing using the db
// db.quit();

module.exports = db;

