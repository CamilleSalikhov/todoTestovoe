import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Modal.css';
import {addTodo} from '../store/actions/addTodo';



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