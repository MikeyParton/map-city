import React from 'react'

const ResultCard = (props) => {
  return (
    <div className='result-card col-md-6'>
      <div className='card mb-3'>
        <img className='property-card-img card-img-top' src={props.property.image_url} />
        <div className='card-block'>
          Description
        </div>
      </div>
    </div>
  )
}

export default ResultCard
