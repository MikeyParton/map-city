import React from 'react'
import { Popup } from 'react-mapbox-gl'
import { price_formatter } from './utils'

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
              <img className='map__popup__thumb' src={property.image_url}/>
            </div>
            <div className='map__popup__content'>
              <strong className='mr-2'>{formatAddress(property)}</strong>
              <div>
                <span>{price_formatter.format(property.price)}</span>
              </div>
            </div>
          </Popup>
        }
      </div> 
    )
  }
})

const formatAddress = (property) => {
  const { number, street, city, postcode } = property
  return (`${number} ${street}`)
}

export default MapLabel
