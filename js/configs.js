var configs = {
  appname: "overpass-turbo",
  defaultServer: "//overpass-cfn-bots-vpc-302488332.us-east-1.elb.amazonaws.com/api/",
  suggestedServers: [
    "//overpass-api.de/api/",
    "http://overpass.osm.rambler.ru/cgi/",
    "http://api.openstreetmap.fr/oapi/",
  ],
  defaultTiles: "//{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA",
  tileServerAttribution: "&copy; OpenStreetMap.org contributors&ensp;<small>Data:ODbL, Map:cc-by-sa</small>",
  suggestedTiles: [
    "//{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA",
    //"http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
    //"http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png",
    //"http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png",
    //"http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg",
  ],
  defaultMapView: {
    lat: 41.890,
    lon: 12.492,
    zoom: 16
  },
  maxMapZoom: 20,
  short_url_service: "",
  html2canvas_use_proxy: false,
}


// https://a.tiles.mapbox.com/v4/mapbox.streets/3/5/5@2x.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA