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
      <div className='search child--flex--50'>
        <div className='search__searchbar'>
          <input
            className="text-field--icon-left"
            type="text"
            placeholder='Search'
            onKeyPress={this.handleKeyPress}
          />
          <i className="text_field__icon--left fa fa-search" aria-hidden="true"></i>
        </div>
        <div className='search__results flex-container--wrap'>
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
