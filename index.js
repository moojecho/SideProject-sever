const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')

const config = require('./config/key');
const { Map } =require("./models/Map");

const mongoose = require('mongoose')
var cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

mongoose.connect(config.mongoURI,
{}).then(()=>console.log('Mongo DB Conneted...'))
  .catch(err=>console.log(err))

app.use(cors())

app.get('/map', (req, res) => {
  res.json([
    {
      'mapNum': "map1",
      'mapLocation1': 37.566826,
      'mapLocation2': 126.9786567,
      'mapLocationName': "중구 세종대로 110 서울특별시청",
    },
    {
      'mapNum': "map2",
      'mapLocation1': 37.566826,
      'mapLocation2': 126.9786567,
      'mapLocationName': "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      'mapNum': "map3",
      'mapLocation1': 37.566826,
      'mapLocation2': 126.9786567,
      'mapLocationName': "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      'mapNum': "map4",
      'mapLocation1': 37.566826,
      'mapLocation2': 126.9786567,
      'mapLocationName': "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      'mapNum': "map5",
      'mapLocation1': 37.566826,
      'mapLocation2': 126.9786567,
      'mapLocationName': "서울특별시 중구 세종대로 110 서울특별시청",
    },
    {
      'mapNum': "map6",
      'mapLocation1': 37.566826,
      'mapLocation2': 126.9786567,
      'mapLocationName': "서울특별시 중구 세종대로 110 서울특별시청",
    },
  ])
})

app.post('/catMap',(req,res)=>{

  const map = new Map(req.body)

  map.save((err, catInfo)=>{
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})