'use client'

import { useRef } from "react"

const ConfirmInvoice = ()=>{
    const submit = () => {
        fetch('http://sig-dev.dev.aumnix.com:7998/insert_so_operations_data',{
            method: 'POST',
            // mode: "no-cors",
            headers: {'Content-Type':'application/json'},
            // body: JSON.stringify({"partner_name":"test_partner","partner_type":"test_type"})}).then(response => console.log(response))
            body: JSON.stringify({"invoice_no":invoice_no_ref.current.value, "order_id":order_id_ref.current.value,"partner_id":partner_id_ref.current.value,"date_of_transaction":date_of_transaction_ref.current.value,"currency":currency_ref.current.value,"income_value":income_value_ref.current.value,"expense_value":expense_value_ref.current.value})})
    // console.log(partner_name_ref.current.value)
        
        
    }

    const invoice_no_ref = useRef()
    const order_id_ref = useRef()
    const partner_id_ref = useRef()
    // const date_of_transaction_ref = useRef()
    const currency_ref = useRef()
    const income_value_ref = useRef()
    const expense_value_ref = useRef()
    return(
        <div className="flex flex-col items-center justify-between h-96 mt-10">
           
            <div>Invoice No.: <input  className="text-black" ref={invoice_no_ref}   name="partner_name"/></div>
            <div>Order Id: <input ref={order_id_ref}  className="text-black w-56 h-6"/></div>
            <div>Partner Id:<input className="text-black w-56 h-6" ref={partner_id_ref}/></div>
            {/* <div>Date of Transaction:<input ref={date_of_transaction_ref} className="text-black" placeholder="YYYY-MM-DD"  /></div> */}
            <div>Currency:<select ref={currency_ref} className="text-black w-56 h-6"><option value={"none"} selected disabled hidden>Select currency</option><option className="text-black">INR</option><option className="text-black">USD</option></select></div>
            <div>Income Value:<input ref={income_value_ref} className="text-black"/></div> 
            <div>Expense Value:<input ref={expense_value_ref} className="text-black"/></div>
            <button  onClick={submit}>Paid</button>
        </div>
    )
}

export default ConfirmInvoice