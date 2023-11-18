'use client'

import { Irish_Grover } from "next/font/google"
import { useRef } from "react"

const PurchaseOrderOperations = ()=>{
    const order_id_ref = useRef()
    const product_category_ref = useRef()
    const hsn_code_ref = useRef()
    const partner_id_ref = useRef()
    const units_count_ref = useRef()
    const rate_per_unit_ref = useRef()
    const currency_ref = useRef()
    const cgst_rate_ref = useRef()
    const sgst_rate_ref = useRef()
    const igst_rate_ref = useRef()

    const submit= ()=>{

        fetch('http://sig-dev.dev.aumnix.com:7998/insert_po_operations_data',{
            method: 'POST',
            // mode: "no-cors",
            headers: {'Content-Type':'application/json'},
            // body: JSON.stringify({"partner_name":"test_partner","partner_type":"test_type"})}).then(response => console.log(response))
            body: JSON.stringify({"order_id":order_id_ref.current.value, "product_category":product_category_ref.current.value,"hsn_code":hsn_code_ref.current.value,"partner_id":partner_id_ref.current.value,"units_count":rate_per_unit_ref.current.value,"rate_per_unit":rate_per_unit_ref.current.value,"currency":currency_ref.current.value,"cgst_rate":cgst_rate_ref.current.value,"sgst_rate":sgst_rate_ref.current.value,"igst_rate":igst_rate_ref.current.value})})
    // console.log(partner_name_ref.current.value)
        
    }
return(
    <div className="flex flex-col items-center justify-between h-96 mt-20">
           
            <div>Order Id: <input  className="text-black" ref={order_id_ref}  /></div>
            <div>Product Category: <select ref={product_category_ref}  className="text-black w-56 h-6"><option value={"none"} selected disabled hidden>Select a type</option><option value={"AIHGB"}>AIHGB</option><option value={"AIHGC"}>AIHGC</option></select></div>
            <div>HSN Code:<select className="text-black" ref={hsn_code_ref} ><option value={"none"} selected disabled hidden>Select HSN code</option><option className="text-black">85243119</option><option className="text-black">85244011</option><option className="text-black">85249112</option></select></div>
            <div>Partner Id:<input ref={partner_id_ref} className="text-black w-56 h-6"/></div>
            <div>Units Count:<input ref={units_count_ref} className="text-black" /></div>
            <div>Rate Per Unit:<input ref={rate_per_unit_ref} className="text-black"/></div>
            <div>Currency:<select ref={currency_ref} className="text-black w-56 h-6"><option value={"none"} selected disabled hidden>Select currency</option><option className="text-black">INR</option><option className="text-black">USD</option></select></div>
            <div>CGST Rate:<input ref={cgst_rate_ref} className="text-black"/></div>
            <div>SGST Rate:<input ref={sgst_rate_ref} className="text-black"/></div>
            <div>IGST Rate:<input ref={igst_rate_ref}  className="text-black"/></div>
            
            <button  onClick={submit}>Submit</button>
        </div>
)
}

export default PurchaseOrderOperations