import React from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';

const Header = () => {

    const dispatch = useDispatch();
    const handleClick =()=>{
      dispatch(modalFunc())
    }
    

    
  return (
    <div className='header'> 
        <h2>REACT UYGULAMA</h2>
        <div className='header-right'>
          <p>Product Sayisi:</p>
            <div className='select'>
                <select name='' id=''>
                    <option value='asc'>Artan</option>
                    <option value='desc'>Azalan</option>
               </select>
            </div>
            <div className='input'>
               <input type='text' placeholder='Arama yapiniz'/>
            </div>
            <div onClick={handleClick}className='icon'><MdLibraryAdd/></div>
        </div>
    </div>
  )
  }

export default Header