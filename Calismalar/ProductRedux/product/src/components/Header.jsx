import React from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';
import { getNumberOfData } from '../redux/dataSlice';

const Header = () => {

  
    const {data} = useSelector(state=>state.data)
    const dispatch = useDispatch();
    const handleClick =()=>{
      dispatch(modalFunc())
    }
    const number = data.length;

    //const number = dispatch(getNumberOfData())
    

    
  return (
    <div className='header'> 
        <h2>REACT UYGULAMA</h2>
        <div className='header-right'>
          <p>Product Sayisi:{number}</p>
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