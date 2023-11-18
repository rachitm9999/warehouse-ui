'use client'

import { useCallback, useEffect, useRef, useState } from "react"



function GeneratingOrder() {
  const [partnerId, setPartnerId] = useState([[""]])
  const [orderType, setOrderType] = useState("")
  // const order_type_ref = useRef("")
  
    const product_category_ref = useRef()
    const hsn_code_ref = useRef()
    const unit_count_ref = useRef()
    const partner_id_ref = useRef()
    const rate_per_unit_ref = useRef()
    const currency_ref = useRef()
  
  function submitorder(){
    fetch('http://sig-dev.dev.aumnix.com:7998/generate_order',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"order_type":orderType,"product_category":product_category_ref.current.value,"hsn_code":hsn_code_ref.current.value,"unit_count":unit_count_ref.current.value,"partner_id":partner_id_ref.current.value,"rate_per_unit":rate_per_unit_ref.current.value,"currency":currency_ref.current.value})
    })
  }
  function salesPartners (){
    fetch('http://sig-dev.dev.aumnix.com:7998/get_sales_partners',{
            method:'POST',

        }).then((response) =>{
            response.json().then((data)=>{
                setPartnerId(data)
            })
        })
  }
  function purchasePartners (){
    fetch('http://sig-dev.dev.aumnix.com:7998/get_purchase_partners',{
            method:'POST',

        }).then((response) =>{
            response.json().then((data)=>{
                setPartnerId(data)
            })
        })
  }

  useEffect(() => {
    if (orderType == "SO"){
      salesPartners()
    }else if (orderType == "PO"){
      purchasePartners()
    }
    console.log(orderType)
    
  }, [orderType])

    
  return (
    <div className="flex flex-col items-center justify-evenly h-96">
    
    <div className="flex">Order Type: <div className="border-black border-2"><select onChange={(e)=>{setOrderType(e.target.value)}} ><option value={"none"} selected disabled hidden>Select a type</option><option value={"PO"}>PO</option><option value={"SO"}>SO</option></select></div></div>
    <div className="flex">Product Category: <div className="border-black border-2"><select ref={product_category_ref}><option>AIHGB</option><option>AIHGC</option></select></div></div>
    <div className="flex">HSN Code: <div className="border-black border-2"><select ref={hsn_code_ref}><option value={"none"} selected disabled hidden>Select HSN code</option><option className="text-black">85243119</option><option className="text-black">85244011</option><option className="text-black">85249112</option></select></div></div>
    <div className="flex">Unit Count: <div className="border-black border-2"><input type="number" ref={unit_count_ref}/></div></div>
    <div className="flex">Partner Id: <div className="border-black border-2"><select ref={partner_id_ref}>{partnerId.map((item,i)=> {return <option key={i}>{item[0]}</option>})}</select></div></div>
    <div className="flex">Rate Per Unit: <div className="border-black border-2"><input type="number" ref={rate_per_unit_ref}/></div></div>
    <div className="flex">Currency: <div className="border-black border-2"><select ref={currency_ref}><option>INR</option><option>USD</option></select></div></div>
    <div onClick={submitorder} className="px-2 py-1 border-black border-4">Generate Order</div>
    </div>
  )
}

export default GeneratingOrder