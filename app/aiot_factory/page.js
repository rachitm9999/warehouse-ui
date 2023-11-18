'use cient'

import DeviceAssembly from '@/components/deviceAssembly'
import Image from 'next/image'
import Link from 'next/link'


function aiotFactory() {
  return (
    <div className='min-h-screen mt-0 bg-gray-400'>
        {/* <div>h</div> */}
        <Image className='mx-auto' src="/axpl_logo.svg" width={200} height={200} alt='axpl_logo'/>
        <div>

<div className='flex justify-around pt-24  '>
  {/* <div className='btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded'>Hellllllllo</div> */}
  <Link href="/partner_ops" className={'hover:underline btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2  cursor-pointer'}>Partner Operations</Link>
  <Link href="/inventory_ops" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded hover:underline cursor-pointer px-2'}>Inventory Operations</Link>
  {/* <Link href="/revenue_ops" className={'hover:underline cursor-pointer'}>Revenue Operations</Link> */}
  <Link href="/aiot_factory" className={'btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded px-2 underline cursor-pointer'}>Device Inventory</Link>
</div>
<hr className='h-2 bg-black mt-10'/>
  </div>
  <DeviceAssembly/>
  </div>
  )
}

export default aiotFactory