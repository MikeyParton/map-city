import React from 'react'
import { Popup } from 'react-mapbox-gl'

const MapLabel = React.createClass({
  render () {
    const property = this.props.selectedProperty
    return (
      <div className='map-popup'>
        {
          property && <Popup
            offset={[0, -100]}
            coordinates={[property.long, property.lat]}>
            <div>
              <img className='map-thumbnail' src={property.image_url}/>
            </div>
            <div className='address'>
              <strong className='mr-2'>{formatAddress(property)}</strong>
              <div>
                <span>{Price.format(property.price)}</span>
              </div>
            </div>
          </Popup>
        }
      </div> 
    )
  }
})

const Price = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

const formatAddress = (property) => {
  const { number, street, city, postcode } = property
  return (`${number} ${street}`)
}

export default MapLabel
