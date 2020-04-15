
import React from 'react';
import { shallow } from 'enzyme';

import Carousel from './Carousel';
import { Avatar } from '@material-ui/core';

describe('<Carousel />', () => {
  let carouselInstance;

  beforeEach(() => {
    const img1 = 'http://placekitten.com/200/300';
    const img2 = 'http://placekitten.com/300/400';
    const img3 = 'http://placekitten.com/200/400';
    const wrapper = shallow(<Carousel id={'test'} images={[img1, img2, img3]} />);
    carouselInstance = wrapper.dive();
  });

  it('should increment the image index by one when back button is clicked', () => {
    const backButton = carouselInstance.find(Avatar).first();

    expect(carouselInstance.instance().state.currImgIdx).toEqual(0);

    backButton.simulate('click');
    expect(carouselInstance.instance().state.currImgIdx).toEqual(2);

    backButton.simulate('click');
    expect(carouselInstance.instance().state.currImgIdx).toEqual(1);
  });

  it('should decrement the image index by one when forward button is clicked', () => {
    const forwardButton = carouselInstance.find(Avatar).last();

    expect(carouselInstance.instance().state.currImgIdx).toEqual(0);

    forwardButton.simulate('click');
    expect(carouselInstance.instance().state.currImgIdx).toEqual(1);

    forwardButton.simulate('click');
    expect(carouselInstance.instance().state.currImgIdx).toEqual(2);
  });
});
