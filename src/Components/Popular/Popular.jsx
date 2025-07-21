
import React from 'react';
import './Popular.css';
import { FcPrevious, FcNext } from "react-icons/fc";
import Slider from 'react-slick';
import p1_image from '../Assets/jacket.png';
import p2_image from '../Assets/blue-dress.png';
import p3_image from '../Assets/orange-outfit.png';
import p4_image from '../Assets/smiling.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <button className="custom-arrow custom-prev"><FcPrevious /></button>,
    nextArrow: <button className="custom-arrow custom-next"><FcNext /></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const data = [
    { id: 1, name: "Striped Flutter Sleeve Blouse", image: p1_image, new_price: 50.00, old_price: 80.00 },
    { id: 2, name: "Blue Dress", image: p2_image, new_price: 85.00, old_price: 120.00 },
    { id: 3, name: "Orange Outfit", image: p3_image, new_price: 100.00, old_price: 150.00 },
    { id: 4, name: "Smiling Style", image: p4_image, new_price: 150.00, old_price: 200.00 },
  ];

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <Slider {...settings} className="image-card-slider-container">
        {data.map((item) => (
          <div key={item.id} className='image-card'>
            <div className='slider-image-wrapper'>
              <img src={item.image} alt={item.name} className='image1' />
            </div>
            <div className='image-card-content'>
              <p>{item.name}</p>
              <h3 className="old-price">${item.old_price}</h3>
              <h3 className="new-price">${item.new_price}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Popular;
