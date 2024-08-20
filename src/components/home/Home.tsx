import React from "react";
import EmergencyHotline from "./EmergencyHotline";
import Dengue from "./Dengue";
import Mujib from "./Mujib";
import CoronaTracerBD from "./CoronaTracerBD";
import BdNationalAnthem from "./BdNationalAnthem";
import Notices from "../notice/Notices";
import TopNews from "../notice/pa/TopNews";
import Events from "../notice/events/Events";
import About from "../information/about/About";
import Contacts from "../information/contact/Contacts";
import InformationLayout from "./InformationLayout";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-9">
              <TopNews />
              <About />
              <div>
                <Notices />
              </div>
              <div>
                <Events />
              </div>
              <InformationLayout />
            </div>
            <div className="col-span-4 sm:col-span-3">
              <div className=" shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <picture>
                    <img
                      src="https://github.com/zbkazi/kmdm/blob/main/src/assets/teachers/kmdm-super.jpg?raw=true"
                      className="   rounded-lg mb-4 shrink-0 w-36 h-36 border-2 border-lime-400 shadow-lg"
                      alt="kmdm-the teacher"
                    ></img>
                  </picture>

                  <h1 className="text-xl font-bold">প্রধান শিক্ষক</h1>
                  <p className="">নাম: -------------</p>
                </div>
                <hr className="my-6 border-t-8 h-2 border-lime-400" />

                <hr className="my-6 border-t-8 h-2 border-lime-300" />

                <Dengue />
              </div>
              <hr className="my-6 border-t-8 h-2 border-lime-300" />

              <div className="flex flex-col">
                <CoronaTracerBD />
              </div>
              <hr className="my-6 border-t-8 h-2 border-lime-300" />
              <EmergencyHotline />

              <div className="flex flex-col">
                <hr className="my-6 border-t-8 h-2 border-lime-300" />
                <div className="flex flex-col">
                  <BdNationalAnthem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contacts />
    </div>
  );
};

export default Home;
