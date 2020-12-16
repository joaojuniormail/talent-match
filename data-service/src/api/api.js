const { json } = require("express");

module.exports = (app, repository) => {

   let getURI = (path) => {
      let prefix = ['/:collection'];
      if(path){
         return prefix.concat(path).join("/")
      }
      return prefix.join("");
   }
   
   app.get(getURI(), (req, res, next) => {
     repository.getAll(req.params.collection)((err, movies) => {
       if(err) return next(err);
       res.json(movies);
     });
   })

   app.get(getURI(":filter"), (req, res, next) => {
      repository.getByFilter(req.params.collection)(JSON.parse(req.params.filter), (err, movies) => {
        if(err) return next(err);
        res.json(movies);
      });
    })

 }