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
                something={"hello"}
                key={property.id}
                coordinates={[property.long, property.lat]}
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