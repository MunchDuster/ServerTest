const PORT = process.env.PORT || 8080

const express = require('express')
const app = express()

const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://themrduder:mememan@cluster0.jszku.mongodb.net/MainDatabase?retryWrites=true&w=majority'

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

let collection

client.connect((err) => {
	if (err) {
		console.error(`Failed to connect to database: err`)
		return
	} else {
		console.log('Connected to database successfully.')
	}

	collection = client.db('MainDatabase').collection('MainCollection')

	// Clear database
	// collection.deleteMany({});

	//Listen for the main page
	app.get('/', function (req, res) {
		console.log('get request recieved!')
		res.sendFile(__dirname + 'client/index.html')
	});

	//Start the server
	app.listen(PORT, () => { console.log(`listening on port: ${PORT}`); })
})