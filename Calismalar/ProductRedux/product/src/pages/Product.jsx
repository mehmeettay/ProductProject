import React from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { Button } from '@mui/material'
import { modalFunc } from '../redux/modalSlice'
import { useState } from 'react'
import { createDataFunc } from '../redux/dataSlice'

const Product = () => {
  const dispatch = useDispatch();

  const {modal} = useSelector(state=>state.modal)
  const {data} = useSelector(state=>state.data)
  console.log(modal,'modal')
  const buttonFunc=()=>{
   dispatch(createDataFunc(productInfo))
   dispatch(modalFunc())

  }
  

  const handleClick3 =()=>{
  }
  const [productInfo, setproductInfo] = useState({name:"",price:"",url:""})

  const onChangeFunc =(e,type)=>{
    if(type=='url')
    {
      setproductInfo(prev =>({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
    }
    else{
      setproductInfo(prev =>({...prev, [e.target.name]: e.target.value}))

    }
  }

  const contentModal =(
     <>
     
            <input  placeholder={'Ürün Adi Ekle'} id={'name'} name={'name'} onChange={e=>onChangeFunc(e,"name")}/>
            <br />
            <input  placeholder={'Fiyat Ekle'} id={'price'} name={'price'} onChange={e=>onChangeFunc(e,"price")}/>
            <input className='resim'  type='file' placeholder={'Resim Sec'} id={'url'} name={'url'} onChange={e=>onChangeFunc(e,"url")}/>
            <Button onClick={buttonFunc} variant="contained" color="primary">Olustur</Button>
            </>
  )
  console.log(data)
  return (
    <div>
      <div className='product'>
        {
          data?.map((dt,i)=>(
            <ProductCard key={i} dt={dt}/>
          ))
          
        }
      </div>
        
        {modal && <Modal content={contentModal} title={<p style={{ fontSize: '24px' }}>Ürün Oluştur</p>} />}
    </div>
  )
}

export default Product