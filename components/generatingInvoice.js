import  { useEffect, useRef, useState } from 'react'

function GeneratingInvoice() {
    const [orderId, setOrderId] = useState([[""]]) 
function submitInvoice(){
    fetch('http://sig-dev.dev.aumnix.com:7998/generate_sales_invoice',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({"order_id":sales_order_id_ref.current.value,"device_count":device_count_ref.current.value})
    })
}
function salesOrders (){
    fetch('http://sig-dev.dev.aumnix.com:7998/get_sales_order_id',{
            method:'POST',

        }).then((response) =>{
            response.json().then((data)=>{
                setOrderId(data)
            })
        })
  }
  useEffect(() => {
    salesOrders()
  
    
  }, [])
  




    const sales_order_id_ref = useRef()
    const device_count_ref = useRef()
    const due_date_ref = useRef()
    

  return (
    <div className='flex flex-col items-center justify-evenly h-96'>

    <div className='flex'>Sales Order Id: <div className="border-black border-2"> <select ref={sales_order_id_ref}><option value={"none"} selected disabled hidden>Select a type</option>{orderId.map((item,i)=> {return <option key={i}>{item[0]}</option>})}</select></div></div>
    <div className='flex'>Device Count: <div className="border-black border-2"><input type='number' ref={device_count_ref}/></div></div>
    {/* <div className='flex'>Due Date: <div className="border-black border-2"><input ref={due_date_ref} className="text-black" placeholder="YYYY-MM-DD"  /></div></div> */}
    <div onClick={submitInvoice} className="px-2 py-1 border-black border-4">Generate Invoice</div>
    <div></div>
    </div>

  )
}

export default GeneratingInvoice