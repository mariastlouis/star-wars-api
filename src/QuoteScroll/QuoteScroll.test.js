import React from 'react';
import QuoteScroll from './QuoteScroll.js';
import { shallow } from 'enzyme';

const mockRandom = jest.fn();

const mockFilm = {
  openingCrawl: "It is a period of civil war.",
  releaseDate: "1977-05-25",
  title: "A New Hope"
}

let renderedQuote;

describe('QuoteScroll' , () =>{
  
  beforeEach(() =>{
    renderedQuote = shallow(<QuoteScroll movie = {mockFilm} />)
  });

  it('should render correctly', () =>{
    expect(renderedQuote).toBeDefined();
  });

  it('should have classes of title and crawl', () =>{
    expect(renderedQuote.find('.crawl').length).toEqual(1);
    expect(renderedQuote.find('.title').length).toEqual(1);
  });

  it('should match the snapshot', () =>{
    expect(renderedQuote).toMatchSnapshot();
  });

});
