import { data } from 'autoprefixer'
import { useEffect, useRef, useState } from 'react'

function RegisterIMEI() {

    const [poList, setPoList ]= useState([[""]])
    
    function getpoid(){
        fetch('http://sig-dev.dev.aumnix.com:7998/get_purchase_order_id',{
            method:'POST',

        }).then((response) =>{
            response.json().then((data)=>{
                setPoList(data)
            })
        })
    }
    useEffect(() => {
      getpoid()
    
      
    }, [])
    
    function submitImei(){
        fetch('http://sig-dev.dev.aumnix.com:7998/register_device',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"imei":imei_no_ref.current.value,"product_category":product_category_ref.current.value,"purchase_order_id":purchase_order_id_ref.current.value})
        })
    }

    const imei_no_ref = useRef()
    const product_category_ref = useRef()
    const purchase_order_id_ref = useRef()

  return (
    <div className="flex flex-col items-center justify-evenly h-96 mt-10">
        
        <div>IMEI no.: <input ref={imei_no_ref}/></div>
        <div>Product Category: <select ref={product_category_ref}><option value={"none"} selected disabled hidden>Select a type</option><option value={"AIHGB"}>AIHGB</option><option value={"AIHGC"}>AIHGC</option></select></div>
        <div>Purchase Order Id: <select ref={purchase_order_id_ref}>{poList.map((item,i)=> {return <option key={i}>{item[0]}</option>})}</select></div>
        <div onClick={submitImei}>Submit</div>
        </div>
  )
}

export default RegisterIMEI