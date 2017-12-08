import React from 'react';
import PropTypes from 'prop-types';
import './QuoteScroll.css';


const QuoteScroll = ({movie}) => {
  return (
    <div className = "quoteScroll">
      <div className = "fade">
      </div>
      <div className = "star-wars-quote">
        <div className = "crawl">
          <div className = "title">
            <h1>{movie.title}</h1>
          </div>
          {movie.openingCrawl}
        </div>
      </div>
    </div>
  );
};

export default QuoteScroll;