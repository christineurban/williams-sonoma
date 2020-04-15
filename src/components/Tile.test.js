
import React from 'react';
import { shallow } from 'enzyme';

import Tile from './Tile';
import Image from './Image';
import Carousel from './Carousel';

describe('<Tile />', () => {
  let tileInstance;

  beforeEach(() => {
    const product = {
      id: '',
      hero: {},
      images: [{href: ''}],
      name: '',
      links: {},
    };
    const wrapper = shallow(<Tile cols={3} product={product} />);
    tileInstance = wrapper.dive();
  });

  it('should show carousel when showCarousel is true', () => {
    expect(tileInstance.find(Image).length).toEqual(1);
    expect(tileInstance.find(Carousel).length).toEqual(0);

    tileInstance.instance().setState({ showCarousel: true });

    expect(tileInstance.find(Carousel).length).toEqual(1);
    expect(tileInstance.find(Image).length).toEqual(0);
  });

  it('should show hero image when showCarousel is false', () => {
    tileInstance.instance().setState({ showCarousel: true });

    expect(tileInstance.find(Carousel).length).toEqual(1);
    expect(tileInstance.find(Image).length).toEqual(0);


    tileInstance.instance().setState({ showCarousel: false });

    expect(tileInstance.find(Image).length).toEqual(1);
    expect(tileInstance.find(Carousel).length).toEqual(0);
  });
});
