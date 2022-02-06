client.connect((err) => {
	if (err) {
		console.error(`Failed to connect to database: ${err}`)
		return
	} else {
		console.log('Connected to database successfully.')
	}

	userCollection = client.db("Database01").collection("Users")
	roomCollection = client.db("Database01").collection("Rooms")
	messageCollection = client.db("Database01").collection("Logs")

	// Clear database
	// messageCollection.deleteMany({});
	// userCollection.deleteMany({});
	// roomCollection.deleteMany({});

	postListeners()
	socketListeners()
})