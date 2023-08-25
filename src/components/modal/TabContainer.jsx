import React, { useState, Suspense } from 'react';
import About from './tabs/About';
import Stats from './tabs/Stats';
import Evolution from './tabs/Evolution';
import Loader from '../Loader';

export const TabConatainer = () => {
  const tabs = [
    { id: 'About', component: <About /> },
    { id: 'Stats', component: <Stats /> },
    { id: 'Evolution', component: <Evolution /> },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <nav className="flex pt-[0.5vw] px-[3vw] pb-0 justify-between">
        {tabs.map(({ id }, index) => (
          <button
            key={index}
            className={`${
              index === currentTab ? 'active' : null
            }   py-[3vw] md:py-[1.5vw] px-[4.5vw] md:px-[2.8vw] font-medium  border-transparent bg-transparent transition-colors w-[8rem] md:w-[9rem] flex items-center justify-center  text-slate-300`}
            onClick={() => setCurrentTab(index)}
          >
            {id}
          </button>
        ))}
      </nav>
      <div className="bg-white px-[6vw] pt-[6vw] pb-[5vw] md:p-[2vw] max-h-[38vh] rounded-3xl overflow-y-auto">
        <Suspense fallback={<Loader />}>{tabs[currentTab].component}</Suspense>
      </div>
    </>
  );
};
