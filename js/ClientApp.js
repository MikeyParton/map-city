import React from 'react'
import { render } from 'react-dom'
import ReactMapboxGl from "react-mapbox-gl"
import Features from './Features'
import MapLabel from './MapLabel'
import Search from './Search'
import properties from '../public/data.json'
require('../public/app.scss')

const App = React.createClass({
  getInitialState () {
    return {
      center: [-111.907047, 33.61525],
      zoom: [11],
      selectedProperty: null,
      properties: properties
    }
  },
  handleMarkerClick (property) {
    this.setState({
      center: [property.long, property.lat],
      selectedProperty: property
    })
  },
  propertySearch (searchTerm) {
    const matching_properties = properties.filter((property) => {
      return property.street.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({properties: matching_properties})
  },
  render () {
    return (
        <div className='wrapper'>
          <Search propertySearch={this.propertySearch} properties={this.state.properties}/>
          <div className='map'>
            <ReactMapboxGl
              style="mapbox://styles/mapbox/streets-v8"
              accessToken='pk.eyJ1IjoibWlrZS1wYXJ0b24iLCJhIjoiY2oxbDdldW5pMDAwajJ3bXRudmQyamZqbyJ9.0TtvXRYfJ7N9R8ehDes3bw'
              containerStyle={{
                height: "100vh",
                width: "100%"
              }}
              center={this.state.center}
              zoom={this.state.zoom}>
              <Features properties={this.state.properties} handleMarkerClick={this.handleMarkerClick} />
              <MapLabel selectedProperty={this.state.selectedProperty} />       
            </ReactMapboxGl>
          </div>
        </div>
      
    )
  }
})

render(<App />, document.getElementById('app'))