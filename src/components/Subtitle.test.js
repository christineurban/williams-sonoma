import React from 'react';
import { mount } from 'enzyme';

import Subtitle from './Subtitle';

describe('<Subtitle />', () => {
  const subtitle = (product) => {
    return mount(<Subtitle product={product} />)
  };

  const range = { priceRange: { regular: { high: 1099, low: 169 }, selling: { high: 439.6, low: 67.6 }, type: 'special' } };
  const price = { price: { regular: 49, selling: 34.3, type: 'special'} };
  const messages = { messages: ['Bonus Deal!'] };

  const regularRangeHtml = range.priceRange.regular.high;
  const regularPriceHtml = price.price.regular;
  const sellingRangeHtml = range.priceRange.selling.low;
  const sellingPriceHtml = price.price.selling;
  const messageHtml = messages.messages[0];

  it('renders nothing with no product data', () => {
    expect(subtitle({}).html()).toBe(null);
  });

  it('renders regular price if regular price', () => {
    expect(subtitle(range).html().includes(regularRangeHtml)).toBe(true);
    expect(subtitle(price).html().includes(regularPriceHtml)).toBe(true);
    expect(subtitle(messages).hasClass(/regular/)).toBe(false);
  });

  it('renders selling price if selling price', () => {
    expect(subtitle(range).html().includes(sellingRangeHtml)).toBe(true);
    expect(subtitle(price).html().includes(sellingPriceHtml)).toBe(true);
    expect(subtitle(messages).hasClass(/selling/)).toBe(false);
  });

  it('renders \'special\' type if type: \'special\'' , () => {
    const typeClassName = 'subtitle-type';

    expect(subtitle(range).html().includes(typeClassName)).toBe(true);
    expect(subtitle(price).html().includes(typeClassName)).toBe(true);
    expect(subtitle(messages).html().includes(typeClassName)).toBe(false);
  });

  it('renders message if message', () => {
    expect(subtitle(messages).html().includes(messageHtml)).toBe(true);
    expect(subtitle(range).hasClass(/message/)).toBe(false);
    expect(subtitle(price).hasClass(/message/)).toBe(false);
  });
});
