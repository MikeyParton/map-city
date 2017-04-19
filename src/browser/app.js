var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
var MapboxGeocoder = require('mapbox-gl-geocoder')
var axios = require('axios')

mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZS1wYXJ0b24iLCJhIjoiY2oxbDdldW5pMDAwajJ3bXRudmQyamZqbyJ9.0TtvXRYfJ7N9R8ehDes3bw'

var map = new mapboxgl.Map({
  container: 'main-map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-74.50, 40],
  zoom: 9
})

map.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
}))

map.on('load', function () {

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-77.03238901390978, 38.913188059745586]
            },
            "properties": {
              "title": "Mapbox DC",
              "icon": "monument"
            }
          }, 
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [-122.414, 37.776]
            },
            "properties": {
              "title": "Mapbox SF",
              "icon": "harbor"
            }
          }
        ]
      }
    },
    "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }
  })

})

map.on('moveend', function () {
  var nw = map.getBounds().getNorthWest();
  var se = map.getBounds().getSouthEast();
  console.log(nw, se)
})

$("#create-property").on("submit", function(event) {
  event.preventDefault()
  
  var form_values = $(event.target).serializeArray()
  var params = form_values.reduce(function (a, b) {
    var new_object = {}
    new_object[b["name"]] = b["value"]
    return Object.assign(a, new_object)
  }, {})

  console.log(params)
  axios({
    url: '/properties',
    method: 'post',
    data: params
  })
  .then(function () {
    console.log('success!')
  })
})