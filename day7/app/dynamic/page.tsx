'use client'
import React, { useState } from 'react'
import dynamic from "next/dynamic";

// Dynamically import the component
const DynamicComponent = dynamic(() => import("@/components/DynamicComp"), { ssr: false });
const Page = () => {
    const [showcomponent, setShowcomponent] = useState(false)
  return (
    <div className='flex flex-col my-5 gap-3 justify-center items-center'>
        {showcomponent && (
            <DynamicComponent/>
        )}
        <button className='bg-black text-white p-3 rounded w-[200px]' onClick={() => setShowcomponent((prev)=>!prev)}>{showcomponent?'Hide Component':'Show Component'}</button>
    </div>
  )
}

export default Page