const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

const config = require("./config/key");
const { Map } = require("./models/Map");

const mongoose = require("mongoose");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("Mongo DB Conneted..."))
  .catch((err) => console.log(err));

app.use(cors());

app.post("/catMap", (req, res) => {
  const map = new Map(req.body);

  map.save((err, catInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.get("/catMap", (req, res) => {
  const map = new Map(req.body);

  Map.find(function(err, catInfo){
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(catInfo);
});
  });


app.get("/map", (req, res) => {
  res.json([
    {
      mapNum: "map1",
      catNum: 2,
      catLocation: "중구 세종대로 110 서울특별시청",
    },
    {
      mapNum: "map2",
      catNum: 5,
      catLocation: "강서구 금낭화로 23길 8 동성아파트",
    },
  ]);
});

Map.find(function(err,maps){
  if(err){
    console.log('error'+err);
  }else{
    console.log(maps,'maps')
  }
})









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
