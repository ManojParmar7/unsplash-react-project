import React from 'react';

const SingleImage = ({ image }) => {
  return (
    <div className="image">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default SingleImage;
