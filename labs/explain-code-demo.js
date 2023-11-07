const express = require('express');

const app = express();

app.use(express.json());

const ninjas = [
    { id: 1, name: 'Naruto' },
    { id: 2, name: 'Sasuke' },
    { id: 3, name: 'Sakura' },
];

app.get('/api/ninjas', (req, res) => {
    res.send(ninjas);
});

app.get('/api/ninjas/:id', (req, res) => {
    const ninja = ninjas.find((ninja) => ninja.id === parseInt(req.params.id));
    if (!ninja) {
        res.status(404).send('Ninja not found');
    }
    res.send(ninja);
});

app.post('/api/ninjas', (req, res) => {
    const ninja = {
        id: ninjas.length + 1,
        name: req.body.name,
    };
    ninjas.push(ninja);
    res.send(ninja);
});

app.put('/api/ninjas/:id', (req, res) => {
    const ninja = ninjas.find((ninja) => ninja.id === parseInt(req.params.id));
    if (!ninja) {
        res.status(404).send('Ninja not found');
    }
    ninja.name = req.body.name;
    res.send(ninja);
});

app.delete('/api/ninjas/:id', (req, res) => {
    const ninja = ninjas.find((ninja) => ninja.id === parseInt(req.params.id));
    if (!ninja) {
        res.status(404).send('Ninja not found');
    }
    const index = ninjas.indexOf(ninja);
    ninjas.splice(index, 1);
    res.send(ninja);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
