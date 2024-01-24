import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';





const Modal = ({title,content,btnText,btnFunc}) => {
    const dispatch = useDispatch();
    const handleClick =()=>{
        dispatch(modalFunc());
    }

    
  return (
    
    <div className='popup-overlay'>
        <div className='popup-content'>
          <div className='window'>
             <div className='title-close'>
            {title }
            <IoIosCloseCircleOutline onClick={handleClick} className='icon-close' />
            {content}
    
              </div>
          </div>
            
          
        </div>

    </div>
  )
}

export default Modal