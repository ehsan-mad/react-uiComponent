import React, { useState } from 'react'

const TabLayout = () => {
    const [activeTab,setActiceTab]=useState('tab1')
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <div className='w-full max-w-lg bg-white p-6 shadow-lg rounded-lg'>
            <div className='flex border-b border-gray-200'>
                <button className={`px-4 py-2 text-lg font-semibold focus:outline-none transition-all duration-200 ease-in-out ${activeTab=='tab1'? 'border-b-2 border-blue-500 text-blue-500':'text-gray-600'}`} onClick={()=>setActiceTab('tab1')}>
                    Tab1
                </button>
                <button className={`px-4 py-2 text-lg font-semibold focus:outline-none transition-all duration-200 ease-in-out  ${activeTab=='tab2'? 'border-b-2 border-blue-500 text-blue-500':'text-gray-600'}`} onClick={()=>setActiceTab('tab2')}>
                    Tab2
                </button>
                <button className={`px-4 py-2 text-lg font-semibold focus:outline-none transition-all duration-200 ease-in-out ${activeTab=='tab3'? 'border-b-2 border-blue-500 text-blue-500':'text-gray-600'}`} onClick={()=>setActiceTab('tab3')}>
                    Tab3
                </button>
            </div>
            <div className='mt-4'>
                {activeTab=='tab1' && <p>Tab1 Content</p>}
                {activeTab=='tab2' && <p>Tab2 Content</p>}
                {activeTab=='tab3' && <p>Tab3 Content</p>}

            </div>
        </div>
    </div>
  )
}

export default TabLayout