const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const port = 5000;
app.get('/', (req, res) => {
    res.send('waw redy and i am , I am not I am getting from my second node server I am trying')
});
const users = [
    { id: 1, name: "Sabana", email: 'msdhar3112@gmail.com', phone: '045565765667' },
    { id: 2, name: "Salman", email: 'Salman12@gmail.com', phone: '045565765667' },
    { id: 3, name: "Mamun", email: 'v112@gmail.com', phone: '045565765667' },
    { id: 4, name: "Jony", email: 'msdhar3112@gmail.com', phone: '045565765667' },
    { id: 5, name: "Piyas", email: 'msdhar3112@gmail.com', phone: '045565765667' },
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
    res.send(users)
})
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body)
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
    res.send(['mango', 'oranges', 'banana'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fozli');
})
app.listen(port, () => {
    console.log('listinint to port', port);
})
