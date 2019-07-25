import React from 'react';
import coffeePicture from '../../pexels-photo-414630.jpg'

const PictureWrapper = props => {
  return (
    <img className="image" src={coffeePicture} alt="coffee" />
  )
}

export default PictureWrapper;
