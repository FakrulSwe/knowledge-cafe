import React from 'react';
import './Knowledge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Knowledge = (props) => {
    const {name, content, upload, time, img, profile,skill1,skill2} = props.knowledge;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='blogs'>
            <img style={{width:'700px',borderRadius:'8px'}} src={img} alt="" />
            <div className='blog'>
                <div style={{display:'flex',gap:'15px'}}>
                    <img className='profileImg' src={profile} alt="" />
                    <div>
                        <h4 style={{marginBottom:'0px'}}>{name}</h4>
                        <p>{upload}</p>
                    </div>
                </div>
                <p>{time} min read <FontAwesomeIcon icon={faBookmark}/></p>
            </div>
            <h1>{content}</h1>
            <div style={{display:'flex',gap:'10px'}}>
                <p>{skill1}</p>
                <p>{skill2}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.knowledge)} className='btn-bookmark'>Mark as read</button>
        </div>
    );
};

export default Knowledge;