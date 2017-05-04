import React from 'react'
import ResultCard from './ResultCard'

const Search = React.createClass({
  getInitialState() {
    return {
      searchTerm: ''
    }
  },
  handleKeyPress (event) {
    if(event.key == 'Enter'){
      const new_search_term = event.target.value
      this.setState({searchTerm: new_search_term})
      this.props.propertySearch(new_search_term)
    }
  },
  render () {
    return (
      <div className='search'>
        <div className='searchbar'>
          <input
            type="text"
            placeholder='Search'
            onKeyPress={this.handleKeyPress}
          />
          <i className="search__icon--left fa fa-search" aria-hidden="true"></i>
        </div>
        <div className='results-list'>
          {
            this.props.properties
              .map((property) => {
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
    )
  }
})

export default Search
