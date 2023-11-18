'use client'

import { useRef } from "react"

const DeviceInventory = ()=>{

const submit = ()=>{

    fetch('http://sig-dev.dev.aumnix.com:7998/insert_device_inventory_data',{
            method: 'POST',
            // mode: "no-cors",
            headers: {'Content-Type':'application/json'},
            // body: JSON.stringify({"partner_name":"test_partner","partner_type":"test_type"})}).then(response => console.log(response))
            body: JSON.stringify({"imei":imei_ref.current.value, "serial_no":serial_no_ref.current.value,"hsn_code":hsn_code_ref.current.value,"product_status":product_status_ref.current.value,"gtm_status":gtm_status_ref.current.value,"sales_order_id":sales_order_id_ref.current.value,"purchase_order_id":purchase_order_id_ref.current.value,"product_category":product_category_ref.current.value})})
    // console.log(partner_name_ref.current.value)
        
}
    const imei_ref = useRef()
    const serial_no_ref = useRef()
    const hsn_code_ref = useRef()
    const product_status_ref = useRef()
    const gtm_status_ref = useRef()
    const purchase_order_id_ref = useRef()
    const sales_order_id_ref = useRef()
    const product_category_ref = useRef()
    return(
        <div className="flex flex-col items-center justify-between h-96 mt-10">
           
            <div>IMEI No.: <input  className="text-black" ref={imei_ref}   /></div>
            <div>Serial No.: <input ref={serial_no_ref}  className="text-black w-56 h-6"/></div>
            <div>HSN Code:<select ref={hsn_code_ref} className="text-black"><option className="text-black">85243119</option><option className="text-black">85244011</option><option className="text-black">85249112</option></select></div>
            <div>Product Status:<select ref={product_status_ref} className="text-black"><option className="text-black">inactive</option><option className="text-black">active</option></select></div>
            <div>Product Category: <select ref={product_category_ref}  className="text-black w-56 h-6"><option value={"none"} selected disabled hidden>Select a type</option><option value={"AIHGB"}>AIHGB</option><option value={"AIHGC"}>AIHGC</option></select></div>
            
            <div>GTM Status:<select ref={gtm_status_ref} className="text-black"><option className="text-black">assembly</option><option className="text-black">packaging</option><option className="text-black">transport</option><option className="text-black">in market</option></select></div>
            <div>Sales Order Id:<input ref={sales_order_id_ref} className="text-black"/></div>
            <div>Purchase Order Id:<input ref={purchase_order_id_ref} className="text-black"/></div>
            <div></div>


            <button  onClick={submit}>Submit</button>
        </div>
    )
}

export default DeviceInventory