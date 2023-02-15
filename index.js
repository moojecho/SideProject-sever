const express = require('express')
const app = express()
const port = 3001

var cors = require('cors')

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