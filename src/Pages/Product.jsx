import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import {ShopContext} from '../Context/ShopContext'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
    
    const {all_product} = useContext(ShopContext); //fetching all products
    const {productId} = useParams(); //getting a particular product id
    const product = all_product.find((e) => e.id === Number(productId)); //storing that particular product and 'Number()' used to convert string to int coz product id is in string

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} /> { /*using this prop we will display the details of that product */}
            <DescriptionBox />
        </div>
    )
}

export default Product
