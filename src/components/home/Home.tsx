import React from 'react'
import EmergencyHotline from './EmergencyHotline'
import Dengue from './Dengue'
import Mujib from './Mujib'
import CoronaTracerBD from './CoronaTracerBD'
import NationalSongMp3 from './NationalSongMp3'

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
           
            <div className="col-span-4 sm:col-span-9">
               
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro labore impedit nostrum repudiandae aperiam vel tenetur accusantium ducimus libero magni, assumenda laborum sunt sint corporis facilis. Pariatur quia cumque itaque!</h1>
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
                        <EmergencyHotline />
                    </div>
                    <div className="flex flex-col">
                        <Dengue />
                    </div>
                    <div className="flex flex-col">
                        <Mujib />
                    </div>
                    <div className="flex flex-col">
                        <CoronaTracerBD />
                    </div>
                    <div className='flex flex-col'>
                    <NationalSongMp3 />
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