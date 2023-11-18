'use client'
import DeviceInventory from '@/components/deviceInventory'
import PartnerOperations from '@/components/registerPartner'
import PurchaseOrderOperations from '@/components/purchaseOrderOperations'
import SalesOrderOperations from '@/components/salesOrderOperations'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'



export default function Home() {
  const [pageState,setPageState] = useState(4)
  return (
    <div className='min-h-screen mt-0 bg-gray-400'>
    {/* <div>h</div> */}
    <Image className='mx-auto' src="/axpl_logo.svg" width={200} height={200} alt='axpl_logo'/>
    
      <div className='flex justify-around pt-32  '>
      <Link href="/partner_ops" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2 hover:underline cursor-pointer'}>Partner Operations</Link>
  <Link href="/inventory_ops" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2 hover:underline cursor-pointer'}>Inventory Operations</Link>
  {/* <Link href="/revenue_ops" className={'underline cursor-pointer'}>Revenue Operations</Link> */}
  <Link href="/aiot_factory" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2 hover:underline cursor-pointer'}>Device Inventory</Link>
</div>
      {/* <hr className='bg-white mt-10'/>
        <div className={pageState == 1?'':'hidden'}>

        <PartnerOperations />
        </div>
        <div className={pageState == 2?'':'hidden'}>
        <PurchaseOrderOperations/>
        </div>
        <div className={pageState == 3?'':'hidden'}>
        <SalesOrderOperations/>
        </div>
        <div className={pageState == 4?'':'hidden'}>
        <DeviceInventory/>
        </div> */}

        
    </div>  )
}
