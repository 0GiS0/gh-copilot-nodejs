// Select all of the get function (lines 30-40), and use the Brush 'Fix Bug' and see if Copilot can detect the problem and fix it. 
// In the if statement of the Get method (line 33) there is an issue. The if and else statements are mixed up, if an item is found we treat it as it was not found and vice versa. 

// We also have an issue in the update method (lines 43-50). We are not handling the case where the item is not found. 
// Select the method and use the Brush 'Make Robust' and see if Copilot can detect the problem and fix it.

const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

var store = [

]

app.get('/store', (_req, res) => {
    res.json(store)
    console.log(`List of items in the store requested by ${_req.ip}`)
});

app.post('/store', (req, res) => {
    store.push(req.body)
    res.status(200).send("success")
    console.log(`Received new item from ${req.ip}, content: ${JSON.stringify(req.body)}`)
});

// Get an item from the store
app.get('/store/:id', (req, res) => {
    const id = req.params.id;
    const item = store[id];
    if (item) {
        res.status(404).send("Item not found");
        console.log(`Item ${id} requested by ${req.ip} not found`);
    } else {
        res.json(item);
        console.log(`Item ${id} requested by ${req.ip}`);
    }
});

// Update an item in the store
app.put('/store/:id', (req, res) => {
    const id = req.params.id;
    const item = store[id];
 
    store[id] = req.body;
    res.status(200).send("success");
    console.log(`Item ${id} updated by ${req.ip}`);
});


app.listen(port, () => console.log(`Node App listening on port ${port}!`));

