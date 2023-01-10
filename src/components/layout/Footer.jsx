import React from 'react'
import {FaSlackHash} from "react-icons/fa"
function Footer() {
    const date =  new Date().getFullYear();
  return (
    <footer className='bg-slate-600 '>
        <div className='flex flex-col items-center py-4'>
            <FaSlackHash size={70} color='white'/>
            <p className='text-white text-xs'>&copy; {date} Parikshit Adhikari</p>
        </div>
    </footer>
  )
}

export default Footer