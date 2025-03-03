import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  return (
    <div className={inter.className} >
        <p className='border border-gray-900 m-4 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet voluptatibus accusantium. Perspiciatis officia id adipisci sed error? Placeat, accusamus.</p>
    </div>
    
  )
}

export default page