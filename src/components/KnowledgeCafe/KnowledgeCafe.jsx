import React, { useEffect, useState } from 'react';
import './KnowledgeCafe.css';
import Knowledge from '../Knowledge/Knowledge';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fackdb';

const KnowledgeCafe = () => {
    const [knowCafes, setKnowCafes] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('knowledge.json')
        .then(res => res.json())
        .then(data => setKnowCafes(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: Get id
        for(const id in storedCart){
            // step 2: Get the blog by using id
            const addedKnowledge = knowCafes.find(knowledge => knowledge.id === id);
            if(addedKnowledge){
                // step 3: Get quantity of the blog
                const quantity = storedCart[id];
                addedKnowledge.quantity = quantity;
                // step 4: add the added blog to the saved cart
                savedCart.push(addedKnowledge);
            }
        }
        setCart(savedCart);
    },[knowCafes])

    const handleAddToCart = (knowledge) =>{
        let newCart = [];
        const exists = cart.find(know => know.id === knowledge.id);
        if(!exists){
            knowledge.quantity = 1;
            newCart = [...cart, knowledge];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(know => know.id !== knowledge.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(knowledge.id);

    }
    
    return (
        <div className='knowledgeCafe-container'>
            <div className="Knowledge-container">
                {
                    knowCafes.map(knowledge => <Knowledge
                    knowledge = {knowledge}
                    key = {knowledge.id}
                    handleAddToCart = {handleAddToCart}
                    ></Knowledge>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default KnowledgeCafe;