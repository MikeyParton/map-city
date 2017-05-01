import React from 'react'
import ReactMapboxGl from "react-mapbox-gl"
import Features from './Features'
import MapLabel from './MapLabel'

const MapWrapper = React.createClass({
  render () {
    return (
      <div className='no-padding col-md-6'>
        <ReactMapboxGl
          style="mapbox://styles/mapbox/streets-v8"
          accessToken='pk.eyJ1IjoibWlrZS1wYXJ0b24iLCJhIjoiY2oxbDdldW5pMDAwajJ3bXRudmQyamZqbyJ9.0TtvXRYfJ7N9R8ehDes3bw'
          containerStyle={{
            height: "100vh",
            width: "100%"
          }}
          center={this.props.center}
          zoom={this.props.zoom}>
          <Features properties={this.props.properties} handleMarkerClick={this.props.selectProperty} />
          <MapLabel selectedProperty={this.props.selectedProperty} />       
        </ReactMapboxGl>
      </div>
    )
  }
})

export default MapWrapper
