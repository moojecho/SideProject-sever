const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
var cors = require('cors')

mongoose.connect('mongodb+srv://mooje:yr1004@visitcat0.iawkrmf.mongodb.net/?retryWrites=true&w=majority',
{}).then(()=>console.log('Mongo DB Conneted...'))
  .catch(err=>console.log(err))

app.use(cors())

app.get('/map', (req, res) => {
  res.json([
    {
      'mapNum': "map1",
      'mapLocation1': 37.566826,
      'mapLocation2': 126.9786567,
      'mapLocationName': "서울특별시 중구 세종대로 110 서울특별시청",
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})