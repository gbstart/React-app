import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { images } from '../data/image';

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const imageHeight = isMobile ? '200px' : '500px';

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
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 20,
        }}
      >
        {isMobile && (
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="side"
            style={{
              width: '100%',
              height: '147px',
              objectFit: 'cover',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          />
        )}

        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease',
              transform: `translateX(-${index * (100 / images.length)}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                style={{
                  width: `${100 / images.length}%`,
                  flexShrink: 0,
                }}
              >
                <img
                  src={src}
                  alt={`slide-${i}`}
                  style={{
                    width: '100%',
                    height: imageHeight,
                    objectFit: 'cover',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                />
              </div>
            ))}
          </div>


          <div
            style={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              padding: '6px 12px',
              borderRadius: 20,
            }}
          >
            <span onClick={goToPrevious} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
              ←
            </span>
            <div>
              {images.map((_, i) => (
                <span
                  key={i}
                  onClick={() => goToIndex(i)}
                  style={{
                    margin: 2,
                    cursor: 'pointer',
                    color: i === index ? '#000' : 'lightgray',
                    fontSize: '1.5rem',
                  }}
                >
                  •
                </span>
              ))}
            </div>
            <span onClick={goToNext} style={{ cursor: 'pointer', fontSize: '1.5rem' }}>
              →
            </span>
          </div>

        </div>
        {!isMobile && (
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="side"
            style={{
              width: '232px',
              height: '498px',
              objectFit: 'cover',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          />
        )}
      </div>
    </div>
  );
};
