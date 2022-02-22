const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('', function(req,res){
    res.send('Server Working Properly')
});
    
router.get('/movies', function(req,res) {
    const movies = ['Spiderman No Way Home', 'KGF Chapter 2', 'Pushpa', 'RRR'] ;
        res.send(movies) ;    
});

router.get('/movies/:number', function(req,res) {
    const movies  = ['Spiderman No Way Home', 'KGF Chapter 2', 'Pushpa', 'RRR'] ;
    const movie = req.params.number
    if(movie >= movies.length){
        res.send('Invalid Index')
    } else {
    res.send(movies[movie])
    }
});

router.get('/films', function(req,res){
    const films = [ {
        "id" : 1,
        "name" : "Shaadi Mein Zaroor Aana"
       }, {
        "id": 2,
        "name" : "Soun Ki Titu Ki Sweety"
       }, {
        "id": 3,
        "name" : "Hum Aapke Hain Koun"
       }, {
        "id": 4,
        "name": "M.S. Dhoni: The Untold Story"
       }]
       
       res.send(films)

});


router.get('/films/:filmId', function(req,res){
    const films = [ {
        "id" : 1,
        "name" : "Shaadi Mein Zaroor Aana"
       }, {
        "id": 2,
        "name" : "Soun Ki Titu Ki Sweety"
       }, {
        "id": 3,
        "name" : "Hum Aapke Hain Koun"
       }, {
        "id": 4,
        "name": "M.S. Dhoni: The Untold Story"
       }]

       const filmId = req.params.movieId
       let found = false;
       for(let i=0; i<films.length;i++){
           if(films[i].id == filmId){
               found = true
               res.send(films[i])
           }
       }


    // Why This Is Not Happen ? 
    //    for(let i=0; i<films.length; i++)
    //       if(films[i].id === filmId){
    //        res.send(films[movieId].name)
    //       } else {
    //           res.send('No movie exists with this id')
    //          } 
            
       
});




module.exports = router;