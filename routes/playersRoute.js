var express = require('express');
var router = express.Router();
var Players = require('../models/playersSchema.js');


// CREATE NEW PLAYER ROUTE STARTS
router.post('/new-player', function(req, res, next) {
  try {
    var mybody = req.body;
    const player = new Players(mybody);
    console.log(player);
    player.save().then(()=>{
      res.status(200).send({
        flag:true,
        message:"New Player is added"
      });
    }).catch((err)=>{
      res.status(500).send({
        flag:false,
        message:"Sorry something went wrong"
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"An error occured",error:error});
  }
 
});
// CREATE NEW PLAYER ROUTE ENDS

// GET ALL PLAYERS ROUTE STARTS
router.get('/all-players', function(req, res) {
    try {
      Players.find().then(players=>{
        res.send({
          players:players,flag:true,totalPlayers:Object.keys(players).length
        })
      }).catch(err=>{
        console.log(err);
        res.status(500).send({flag:false,message:"Sorry something went wrong"});
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({message:"An error occured",error:error});
    }
   
  });
  // GET ALL PLAYERS ROUTE ENDS

module.exports = router;