import React from 'react'
import { render } from 'react-dom'
import ReactMapboxGl from "react-mapbox-gl"
import Features from './Features'
import MapLabel from './MapLabel'
import ResultCard from './ResultCard'
import properties from '../public/data.json'

const App = React.createClass({
  getInitialState () {
    return {
      center: [-111.907047, 33.61525],
      zoom: [11],
      selectedProperty: null
    }
  },
  handleMarkerClick (property) {
    this.setState({
      center: [property.long, property.lat],
      selectedProperty: property 
    })
  },
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='search-block d-flex flex-column'>
              <div className='searchbar mb-3 mt-3'>
                <input className='form-control' type="text" placeholder='Search'/>
                <i className="input-right-icon fa fa-search" aria-hidden="true"></i>
              </div>
              <div className='property-list row'>
                {
                  properties.map((property) => {
                    return (
                      <ResultCard 
                        key={property.id}
                        property={property}
                      />
                    )
                  })
                }
              </div>
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