const express = require('express');
const { MongoClient } = require("mongodb")

const app = express();
const PORT = 3000;

let connectionString = 'mongodb+srv://murraycoding:DataEngineer2024@edp-cluster.bbvuyvz.mongodb.net/';

const client = new MongoClient(connectionString)
const db = client.db("project-management")

console.log("This is a test.")

async function run() {
    try {
        // connects to the atlas cluster
        await client.connect();

        // gets the database and cluster to run the operation
        const db = client.db("project-management")
        const peopleCollection = db.collection("people")
        const projectsCollection = db.collection("projects")
        const tasksCollection = db.collection("tasks")

        // try to find a project
        const filter = {"projectId": 1}
        const document = await projectsCollection.findOne(filter);

        console.log(JSON.stringify(document))


    }
    catch (error) {
        console.log(error.stack)
    }
}

async function getProjects() {

    let projects;
    try {
        await client.connect();

        const projectsCollection = db.collection("projects")
        // projects = await projectsCollection.findOne({"projectId":1})
        projects = await projectsCollection.find().toArray()
    }
    catch (error) {
        console.log(error)
    }
    return projects
}

async function getPeople() {
    let people;
    try {
        await client.connect();
        const peopleCollection = db.collection("people")
        people = await peopleCollection.find().toArray()
    } 
    catch (error) {
        console.log(error)
    }
    return people
}

async function getTasks() {
    let tasks;
    try {
        await client.connect();
        const tasksCollection = db.collection("tasks");
        tasks = await tasksCollection.find().toArray();
    }
    catch (error) {
        console.log(error)
    }
    return tasks
}


// routes
app.get('/', (req,res) => {
    res.send('Hello, this is your express REST API!')
})

app.get('/api/projects', async (req, res) => {
    const data = await getProjects()
    res.json(data)
})

app.get('/api/people', async (req, res) => {
    const data = await getPeople()
    res.json(data)
})

app.get('/api/tasks', async (req, res) => {
    const data = await getTasks()
    res.json(data)
})

/*
app.get('/api/tasks', async (req, res) => {
    const data = await getTasks()
    res.json(data)
})
*/

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
