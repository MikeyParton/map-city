import React from 'react'
import { price_formatter } from './utils'

const ResultCard = React.createClass({
  render () {
    const { street, number, city, bathrooms, rooms, image_url, price } = this.props.property
    return (
      <div className='property-card child--flex--50'>
        <div className='card mb-3'>
          <div className="property-card__fav">
            <i className="outline fa fa-heart-o fa-2x" aria-hidden="true"></i>
            <i className="fade-fill fa fa-heart fa-2x" aria-hidden="true"></i>
          </div>
          <img className='property-card__img' src={image_url} />
          <div className='card-block'>
            <div className='flex-container'>
              <div className="truncated">{number} {street}</div>
              <div>{price_formatter.format(price)}</div>
            </div>
            <div className='flex-container--justify-between text-muted'>
              <small>{city}</small>
              <small>
                <span>{rooms} <i className="fa fa-bed mr-2" aria-hidden="true"></i></span>
                <span>{bathrooms} <i className="fa fa-bath" aria-hidden="true"></i></span>
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default ResultCard
