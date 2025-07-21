import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/BreadCrums/Breadcrum';
import Productdispay from '../Components/ProductDisplay/Productdispay';
import Description from '../Components/DescriptionBox/Description';
import Relatedproducts from '../Components/RelatedProducts/Relatedproducts';

const Product = () => {

    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <Productdispay product={product}/>
      <Description />
      <Relatedproducts />
    </div>
  )
}

export default Product;