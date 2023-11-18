'use client'

import { useRef } from "react"

 const PartnerRegistration = () =>{
    const partner_name_ref = useRef()
    const partner_type_ref = useRef()
    const partner_msisdn_ref = useRef()
    const partner_email_id_ref = useRef()
    const partner_pan_ref = useRef()
    const partner_mode_ref = useRef()
    const partner_status_ref = useRef()
    const submit = (e) => {
        // e.preventDefault();
        fetch('http://sig-dev.dev.aumnix.com:7998/insert_partner_operations_data',{
            method: 'POST',
            // mode: "no-cors",
            headers: {'Content-Type':'application/json'},
            // body: JSON.stringify({"partner_name":"test_partner","partner_type":"test_type"})}).then(response => console.log(response))
            body: JSON.stringify({"partner_name":partner_name_ref.current.value, "partner_type":partner_type_ref.current.value,"partner_msisdn":partner_msisdn_ref.current.value,"partner_email_id":partner_email_id_ref.current.value,"partner_pan":partner_pan_ref.current.value,"partner_mode":partner_mode_ref.current.value,"partner_status":partner_status_ref.current.value})})
    // console.log(partner_name_ref.current.value)
        // partner_name_ref.current.value = ""
        // partner_type_ref.current.value = ""
    
    }
    return (
        <div className="flex flex-col items-center justify-evenly h-96">
           
            <div className="flex">Partner Name: <div className="border-black border-2"><input  className="text-black" ref={partner_name_ref}   name="partner_name"/></div></div>
            <div className="flex">Partner Type: <div className="border-black border-2"><select ref={partner_type_ref} name="partner_type" className="text-black w-56 h-6"><option value={"none"} selected disabled hidden>Select a type</option><option value={"vendor"}>vendor</option><option value={"merchant"}>merchant</option></select></div></div>
            <div className="flex">Partner MSISDN: <div className="border-black border-2"><input ref={partner_msisdn_ref} className=""/> </div></div>
            <div className="flex">Partner Email Id: <div className="border-black border-2"><input ref={partner_email_id_ref} className=""/> </div></div>
            <div className="flex">Partner PAN : <div className="border-black border-2"><input ref={partner_pan_ref} className=""/> </div></div>
            <div className="flex">Partner Mode: <div className="border-black border-2"><input ref={partner_mode_ref} className=""/></div></div>
            <div className="flex">Partner Status: <div className="border-black border-2"><input ref={partner_status_ref} className=""/></div></div>
            <div></div>
            
            <button  className="px-2 py-1 border-black border-4"  onClick={submit}>Submit</button>
        </div>
    )
}

export default PartnerRegistration