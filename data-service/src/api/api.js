module.exports = (app, repository) => {

   let getURI = (path) => {
      let prefix = ['/:collection'];
      return prefix.concat(path).join("/")
   }
   
   app.get(prefix, (req, res, next) => {
     repository.get((err, movies) => {
       if(err) return next(err);
       res.json(movies);
     });
   })

 }