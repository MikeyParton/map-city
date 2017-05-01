import React from 'react'
import { render } from 'react-dom'
import ReactMapboxGl from "react-mapbox-gl"
import Features from './Features'
import MapLabel from './MapLabel'

const properties = [
  {
    id: 1,
    number: "7555",
    street: "20th Street", 
    city: "Phoenix", 
    postcode: "85020",
    price: "$549,000",
    lat: -0.481747846041145,
    long: 51.3233379650232,
    image_url: "https://commondatastorage.googleapis.com/psimple-listing-images/detail_6109ade6-f35e-48d6-8ccf-62e048ac9cfb.jpeg" 
  }
]

const App = React.createClass({
  getInitialState () {
    return {
      center: [-0.481747846041145, 51.3233379650232],
      zoom: [11],
      selectedProperty: properties[0]
    }
  },
  handleMarkerClick (property) {
    this.setState({
      center: [property.lat, property.long],
      zoom: [14],
      selectedProperty: property 
    })
  },
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='searchbar'>
              <input className='form-control' type="text" placeholder='Search'/>
              <i className="input-right-icon fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div className='no-padding col-md-6'>
            <ReactMapboxGl
              style="mapbox://styles/mapbox/streets-v8"
              accessToken='pk.eyJ1IjoibWlrZS1wYXJ0b24iLCJhIjoiY2oxbDdldW5pMDAwajJ3bXRudmQyamZqbyJ9.0TtvXRYfJ7N9R8ehDes3bw'
              containerStyle={{
                height: "100vh",
                width: "100%"
              }}
              center={this.state.center}
              zoom={this.state.zoom}>
              <Features properties={properties} handleMarkerClick={this.handleMarkerClick} />
              <MapLabel selectedProperty={this.state.selectedProperty} />       
            </ReactMapboxGl>
          </div>
        </div>
      </div> 
    )
  }
})

render(<App />, document.getElementById('app'))