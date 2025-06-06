import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { images } from '../data/image';

export const Slider = () => {

  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const slideWidth = isMobile ? 100 : 80;
  const marginRight = isMobile ? 0 : 10;
  const imageHeight = isMobile ? '200px' : 500;

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToIndex = (i) => {
    setIndex(i);
  };

  return (
    <div style={{ overflow: 'hidden', width: '100%', margin: '0 auto', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${index * (slideWidth + marginRight)}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            style={{
              width: `${slideWidth}%`,
              marginRight: `${marginRight}%`,
              flexShrink: 0,
              height: imageHeight,
              objectFit: 'cover',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          />
        ))}
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <span onClick={goToPrevious} style={{ cursor: 'pointer', fontSize: '1.5rem', userSelect: 'none' }}>
          ←
        </span>
        <div style={{ textAlign: 'center', marginTop: 5 }}>
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => goToIndex(i)}
              style={{
                margin: 2,
                cursor: 'pointer',
                color: i === index ? 'black' : 'lightgray',
                fontSize: '1.5rem',
                userSelect: 'none',
              }}
            >
              •
            </span>
          ))}
        </div>
        <span onClick={goToNext} style={{ cursor: 'pointer', fontSize: '1.5rem', userSelect: 'none' }}>
          →
        </span>
      </div>
    </div>
  );
};
