import React from 'react';
import { mount } from 'enzyme';

import Image from './Image';

describe('<Image />', () => {
  const image = ({ url, alt, imageClicked }) => {
    return mount(<Image url={url} alt={alt} imageClicked={imageClicked} />)
  };

  const url = 'http://placekitten.com/200/300';
  const alt = 'place kitten';

  it('renders img src', () => {
    expect(image({ url }).find('img').prop('src')).toBe(url);
  });

  it('renders img alt if alt', () => {
    expect(image({ url, alt }).find('img').prop('alt')).toBe(alt);
  });
});
