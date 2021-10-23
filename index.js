const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors());

const port = 8080; var cors = require('cors');
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('I am exprience with nodeMon');
})

const users = [
    {id: 0, name : 'shabana', email: 'samthing@gmail.com', phone: ''},
    {id: 1, name : 'sabnoor', email: 'samthing@gmail.com', phone: '1'},
    {id: 2, name : 'Purnima', email: 'samthing@gmail.com', phone: '2'},
    {id: 3, name : 'mousumi', email: 'samthing@gmail.com', phone: '3'},
    {id: 4, name : 'mousumi1', email: 'samthing@gmail.com', phone: '3'},
    {id: 5, name : 'mousumi2', email: 'samthing@gmail.com', phone: '3'},
    {id: 6, name : 'mousumi3', email: 'samthing@gmail.com', phone: '3'},
    {id: 7, name : 'mousumi4', email: 'samthing@gmail.com', phone: '3'},
]

app.get('/users', (req, res) => {
    res.send(users)
})

// search quary
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

//app.Method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'jackfruits']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yes I am fazli');
})




app.listen(port, () => {
    console.log('Listening port', port);
})