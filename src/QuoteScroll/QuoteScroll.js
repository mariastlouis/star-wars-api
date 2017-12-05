import React from 'react'
import PropTypes from 'prop-types';


const QuoteScroll = ({movie}) => {
  return (
    <div className = "quoteScroll">
     {movie.openingCrawl}
     {movie.title}

    </div>
  )
}

export default QuoteScroll;