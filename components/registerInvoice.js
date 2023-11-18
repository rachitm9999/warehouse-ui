'use client'

import { useEffect, useRef, useState } from "react"

const RegisterInvoice = ()=>{
    const [orderId, setOrderId] = useState([[""]])
    
    const submit = () => {
        fetch('http://sig-dev.dev.aumnix.com:7998/register_po_invoice',{
            method: 'POST',
            // mode: "no-cors",
            headers: {'Content-Type':'application/json'},
            // body: JSON.stringify({"partner_name":"test_partner","partner_type":"test_type"})}).then(response => console.log(response))
            body: JSON.stringify({"invoice_no":invoice_no_ref.current.value, "order_id":order_id_ref.current.value,"device_count":device_count_ref.current.value})})  // console.log(partner_name_ref.current.value)
        
        
    }
    

function purchaseOrders (){
    fetch('http://sig-dev.dev.aumnix.com:7998/get_purchase_order_id',{
            method:'POST',

        }).then((response) =>{
            response.json().then((data)=>{
                setOrderId(data)
            })
        })
  }
  useEffect(() => {
    purchaseOrders()
  
    
  }, [])

    const invoice_no_ref = useRef()
    const order_id_ref = useRef()
    const partner_id_ref = useRef()
    const transaction_ts_ref = useRef()
    const currency_ref = useRef()
    const income_value_ref = useRef()
    const expense_value_ref = useRef()
    const device_count_ref = useRef()

    return(
        <div className="flex flex-col items-center justify-evenly h-96 mt-10">
           
            <div>Invoice No.: <input  className="text-black" ref={invoice_no_ref}   name="partner_name"/></div>
            <div>Purchase Order Id: <select ref={order_id_ref}  className="text-black w-56 h-6">{orderId.map((item,i)=> {return <option key={i}>{item[0]}</option>})}</select></div>
            <div>Device Count: <input ref={device_count_ref} type="number"/></div>
            <button  onClick={submit}>Submit</button>
        </div>
    )
}

export default RegisterInvoice