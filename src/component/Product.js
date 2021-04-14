import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'
//import products from '../products'

function Product({product}) {
    return (
        <div>
            <Card className="my-3 p-3 rounded">
                <Link onTouchCancel={'/product/${product._id'}>
                   <Card.Img src = {product.image}/>
                </Link>
            <Card.Body >
                <Link to={'/product/${product._id}'}>
                    <Card.Title as ="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as ="div">
                <div className="my-3">
                        {/* {product.rating} sur {product.numRevies} avis */}
                        <Rating va ={product.rating} text={`${product.numReviews} avis`} color= {'#f8e825'}/>
                    </div>
                 </Card.Text>
                 <Card.Text as ="h3">
                     ${product.price}
                 </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Product
