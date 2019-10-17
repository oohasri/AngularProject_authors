const mongoose = require('mongoose');
      Author = mongoose.model('Author');
      authors = require('../controllers/authors.js');

module.exports = function(app) {
    app.get('/authors', (req, res) => {
        authors.retrive_all(req, res);
    });
    app.post('/author/new', (req, res) => {
        authors.create(req, res);
    });
    app.put('/author/update/:id', (req, res) => {
        authors.update(req, res);
    });
    app.get('/author/:id', (req, res) => {
        authors.retrive_id(req, res);
    });
    app.delete('/author/delete/:id', (req, res) =>{
        authors.delete(req, res);
    });
}