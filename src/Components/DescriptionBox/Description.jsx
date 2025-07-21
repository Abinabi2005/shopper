import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className='description'>
       <div className='description-navigator'>
        <div className='description-nav'>Description</div>
        <div className='description-nav fade'>Reviews (122)</div>
       </div>
       <div className='description-describ'>
         <p>An e-commerce website is an online platform that allows businesses to sell products or services to customers over the internet. It essentially functions as a digital storefront, enabling users to browse, select, and purchase items online, often including features like product catalogs, shopping carts, secure payment gateways, and customer support.</p>
         <p>E-commerce websites facilitate online transactions, allowing customers to browse products, add them to a virtual cart, and complete purchases using various payment methods. </p>
       </div>
    </div>
  )
}

export default Description;