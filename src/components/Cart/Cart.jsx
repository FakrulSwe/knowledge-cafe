import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let quantity = 0;
    let content;
    for(const blog of cart){
        if(blog.quantity === 0){
            blog.quantity = 1;
        }
        total = total + blog.time * blog.quantity;
        quantity = quantity + blog.quantity;
        content = blog.content;

    }


    return (
        <div className='cart'>
            <div className='spent-time'>
                <p>Spent time on read : {total} min</p>
            </div>
            <div className='totalBlogs'>
                <p style={{fontSize:'20px'}}>Bookmarked Blogs : {quantity}</p>
                <div className='cartBlogs'>
                    <p>{content}</p>
                </div> 
            </div>
        </div>
    );
    
};

export default Cart;