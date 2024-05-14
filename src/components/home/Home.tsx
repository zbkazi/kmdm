import React from 'react'
import EmergencyHotline from './EmergencyHotline'
import Dengue from './Dengue'
import Mujib from './Mujib'
import CoronaTracerBD from './CoronaTracerBD'
import BdNationalAnthem from './BdNationalAnthem'
import Notices from '../notice/Notices'
import TopNews from '../notice/pa/TopNews'

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
           
            <div className="col-span-4 sm:col-span-9">
               <TopNews />
               <div>
                <Notices />
               </div>
            </div>
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src="https://randomuser.me/api/portraits/men/94.jpg" className=" blur-md w-60 h-34 bg-gray-300 rounded-lg mb-4 shrink-0">

                        </img>
                        <h1 className="text-xl font-bold">Dr. John Doe</h1>
                        <p className="text-gray-700">Head of the Department</p>
                        
                    </div>
                    <hr className="my-6 border-t border-gray-300" />
                    
                    <div className="flex flex-col">
                        <Mujib />
                    </div>
                    <hr className="my-6 border-t-8 h-2 border-gray-300" />
                    
                    
                        <Dengue />
                    </div>
                    <hr className="my-6 border-t-8 h-2 border-gray-300" />
                    
                    <div className="flex flex-col">
                        <CoronaTracerBD />
                    </div>
                    <hr className="my-6 border-t-8 h-2 border-gray-300" />
                    <EmergencyHotline />
                 
                  <div className="flex flex-col">
                    <hr className="my-6 border-t-8 h-2 border-gray-300" />
                    <div className='flex flex-col'>
                    <BdNationalAnthem />
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        
    </div>
</div>
    </div>
  )
}

export default Home