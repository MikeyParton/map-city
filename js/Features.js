import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Features = React.createClass({
  render () {
    return (
      <Layer
        type="symbol"
        id="marker"
        layout={{ "icon-image": "marker-15" }}>
        {
          this.props.properties.map((property) => {
            return (
              <Feature
                key={property.id}
                coordinates={[property.lat, property.long]}
                onClick={() => {this.props.handleMarkerClick(property)}}
                >
              </Feature>
            )
          })
        }
      </Layer>          
    )
  }
})

export default Features