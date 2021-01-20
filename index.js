const exp = require('express');
const parser = require('body-parser');
const cors = require('cors');

var items = [];

app = exp();
app.use(cors());
app.use(parser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send(items);
	
});

app.get('/:id', function(req, res) {
	const item = items[req.params.id];
    res.send(item);
});

app.post('/',function(req,res) {
    const id = items.push(req.body)-1;
    res.send(id);
});

app.put('/guide/:id',(req,res) =>{
    const id = req.params.id;
    items[id] = req.body;
    res.send(id);
});

app.del('/guide/:id', (req,res) =>{
    const id = req.params.id;
    items[id] = null;
    res.send(id);
});

app.listen(3000);

