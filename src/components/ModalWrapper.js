import React, { useState } from 'react';
import './Modal.css';



const ModalWrapper = (props) => {

   

    

 

    return(
       <div className="container">
            <div className="content">
                <button onClick={props.modalHandler}   className='closeButton' >X</button>
                {props.children}
            </div>
        </div>
        
        

    )
};

export default ModalWrapper;