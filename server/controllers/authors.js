const mongoose = require('mongoose');
      Author = mongoose.model('Author');

module.exports = {
    retrive_all: function(req, res) {
    	Author.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    retrive_id :function(req, res){
        Author.findOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
    },
    create :function(req, res){
        Author.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    update : function(req, res){
        Author.findOneAndUpdate({_id : req.params.id} , req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
    delete : function(req, res){
        Author.deleteOne({_id : req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
}