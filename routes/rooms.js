var express = require("express");
var router = express.Router();
var jwtValidator = require("../middlewares/jwt-validator");
var [getRoomsByHome,getOneById, getRooms] = require("../controllers/room");


router.get("/", async function (req, res, next) {
    const rooms = await getRooms();
    res.send(rooms);
});

router.get("/:id", async function (req, res, next) {
  const room = await getOneById(req.params.id);
  res.send(room);
});



module.exports = router;