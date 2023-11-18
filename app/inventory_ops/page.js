'use client'

import RegisterIMEI from "@/components/registerIMEI"
import RegisterInvoice from "@/components/registerInvoice"
import Image from "next/image"
import Link from "next/link"

function InventoryOps() {
  return (
    <div className='min-h-screen mt-0 bg-gray-400'>
        {/* <div>h</div> */}
        <Image className='mx-auto' src="/axpl_logo.svg" width={200} height={200} alt='axpl_logo'/>
        <div>

<div className='flex justify-around pt-32  '>
  <Link href="/partner_ops" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2 hover:underline cursor-pointer'}>Partner Operations</Link>
  <Link href="/inventory_ops" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2 underline cursor-pointer'}>Inventory Operations</Link>
  {/* <Link href="/revenue_ops" className={'hover:underline cursor-pointer'}>Revenue Operations</Link> */}
  <Link href="/aiot_factory" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2 hover:underline cursor-pointer'}>Device Inventory</Link>
</div>
<hr className='h-2 bg-black mt-10'/>
  </div>
  <RegisterInvoice/>
<hr className='h-2 bg-black mt-10'/>
  <RegisterIMEI/>
  </div>
  )
}

export default InventoryOps