# REST_react
 Crud Express MongoDB `mogoose` React `GEOJSON`
 
 add some GEOjson data in mongoDB to try,link [GEOJSON Data is Here][1]
 
> ` cnpm install`
> `nodemon`
> localhost:3001

`//粘贴下面这些，将数据添加到mongodb中
db.appgo.insert({
  "name": "张七",
  "rank": "no belt",
  "available": true,
  "geometry" : {"type": "point", "coordinates": [-81.500, 24.10]}
})
//等等数据，appgo为我的数据库名称

//查看数据库中数据
db.appgo.find().pretty()


|     |     |     |     |
| --- | --- | --- | --- |
|  ![enter description here][2]   |  ![enter description here][3]   | 
|   ![enter description here][4]  |  ![enter description here][5]   | 
|     |     |     |     |


  [1]: https://github.com/lmislm/REST_react/blob/master/data/data.txt
  [2]: https://github.com/lmislm/REST_react/blob/master/view-img/Snipaste_2018-02-14_18-19-21.png?raw=true
  [3]: https://github.com/lmislm/REST_react/blob/master/view-img/Snipaste_2018-02-14_18-32-10.png?raw=true
  [4]: https://github.com/lmislm/REST_react/blob/master/view-img/Snipaste_2018-02-14_22-30-49.png?raw=true
  [5]: https://github.com/lmislm/REST_react/blob/master/view-img/Snipaste_2018-02-14_22-31-26.png?raw=true
