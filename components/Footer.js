import React from 'react';

const Footer = () => {
  return (
    <div className='bg-red-200'>
      <p>This is the footer</p>
      <p>Go to /products/product_id to se more information</p>
      <p>Go to /api/avo to see all avocados data</p>
      <p>Go to /api/avo/avocado_id to see specific avocado data</p>
    </div>
  );
}

export default Footer;