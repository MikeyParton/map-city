import React from 'react'
import { price_formatter } from './utils'

const ResultCard = React.createClass({
  render () {
    const { street, number, city, bathrooms, rooms, image_url, price } = this.props.property
    return (
      <div className='result-card'>
        <div className='card mb-3'>
          <div className='card-img-container'>
            <i className="heart-property fa fa-heart-o fa-2x" aria-hidden="true"></i>
            <i className="heart-property fa fa-heart fa-2x" aria-hidden="true"></i>
            <img className='property-card-img card-img-top' src={image_url} />
          </div>
          <div className='card-block'>
            <div className='result-info-row'>
              <div className="truncated">{number} {street}</div>
              <div>{price_formatter.format(price)}</div>
            </div>
            <div className='result-info-row text-muted'>
              <small className='row-content'>{city}</small>
              <small className='row-content'>
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
