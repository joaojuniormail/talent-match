const test = require('tape');
const repository = require('./repository')

let runTests = () => {
   let id = 10;
   let collection = "skill";
   let filter = {};

   test('Repository GetAll', (t) => {
      repository.getAll(collection)((err, movies) => {
          if(movies && movies.length > 0) id = movies[0]._id;
          t.assert(!err && movies && movies.length >= 0, "All Returned");
          t.end();
      });
  })

  test('Repository GetByFilter', (t) => {
   repository.GetByFilter(collection)(filter, (err, movies) => {
       if(movies && movies.length > 0) 
       t.assert(!err && movies && movies.length >= 0, "All Returned");
       t.end();
   });
})
  
  test('Repository GetById', (t) => {
      if(!id) {
          t.assert(false, "By Id Returned");
          t.end();
          return;
      }

      repository.getById(collection)(id, (err, movie) => {
          t.assert(!err && movie, "By Id Returned");
          t.end();
      });
  })


  test('Repository Disconnect', (t) => {
      t.assert(repository.disconnect(), "Disconnect Ok");
      t.end();
  })

}
module.exports = { runTests }