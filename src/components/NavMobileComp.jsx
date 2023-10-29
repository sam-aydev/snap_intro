import { useState } from 'react';

import menuButton from '../assets/icon-menu.svg';
import arrowDown from '../assets/icon-arrow-down.svg';
import Todo from '../assets/icon-todo.svg';
import Calendar from '../assets/icon-calendar.svg';
import Reminder from '../assets/icon-reminders.svg';
import Planning from '../assets/icon-planning.svg';
import arrowUp from '../assets/icon-arrow-up.svg';
import closeMenu from '../assets/icon-close-menu.svg'

export default function NavMobileComp({menu, setMenu}){
    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);
    


    return(
        <>
            <div>
                <img onClick={()=>setMenu((menu)=> !menu)} src={!menu && `${menuButton}`} alt="menu" className='mt-7  cursor-pointer md:hidden'/>

                <div className='md:flex hidden gap-6 mt-5'>
                <button>Login</button>
                <button className='border border-black rounded-xl px-3 py-2'>Register</button>
                </div>
            </div>
            {menu && 
            <div className=' md:hidden  '>
              <div className='bg-white h-full   w-2/3 right-0 fixed   '>
                <img onClick={()=>setMenu((menu)=> !menu)} src={!menu ? `${menuButton}` : `${closeMenu}`} alt="menu" className='mt-7 absolute right-14 pl- cursor-pointer md:hidden'/>
          
                <div onClick={()=> setFeatures((features)=> !features)} className='flex cursor-pointer space-x-3 px-4 mt-20 py-2'>
                  <p>Features</p>
                  <span className='mt-[10px]'><img src={!features ? `${arrowDown}` : `${arrowUp}`} alt="" /></span>
                </div>
                {features && 
                  <div>
                    <div className='bg-white px-4  md:hidden flex flex-col'>
                      <div className='flex space-x-3 px-4 py-2'>
                        <span className='mt-1'><img src={Todo} alt="todo" /></span>
                        <p>Todo List</p>
                      </div>
                      <div className='flex space-x-3 px-4 py-1'>
                        <span className='mt-1'><img src={Calendar} alt="calendar" /></span>
                        <p>Calendar</p>
                      </div>
                      <div className='flex space-x-3 px-4 py-1'> 
                        <span className='mt-1'><img src={Reminder} alt="remind" /></span>
                        <p>Reminders</p>
                      </div>
                      <div className='flex space-x-3 px-4 py-2 pb-4'>
                        <span className='mt-1'><img src={Planning} alt="plan" /></span>
                        <p>Planning</p>
                      </div>
                    </div>
                  </div>
                }
          
                <div className='flex space-x-3 px-4 py-1 cursor-pointer' onClick={()=> setCompany((company)=> !company)}>
                  <p>Company</p>
                  <span className='mt-[10px]'><img src={!company ? `${arrowDown}`: `${arrowUp}`} alt="" /></span>
                </div>
                {company && 
                  <div>
                    <div className='bg-white px-4  md:hidden flex flex-col'>
                      <div className=' px-4 py-2'>
                        <p>History</p>
                      </div>
                      <div className=' px-4 py-1'>
                        <p>Our Team</p>
                      </div>
                      <div className='px-4 py-1 pb-2'> 
                        <p>Blog</p>
                      </div>          
                    </div>
                  </div>
                }
          
                <div className=' px-4 py-2'> 
                  <p>Careers</p>
                </div>
                <div className='px-4 py-2'>
                  <p>About</p>
                </div>
                
                <div className='px-8 flex flex-col '>
                  <button className=' py-2 mt-6 '>Login</button>
                  <button className=' py-1 border-2 border-slate-400 rounded-xl '>Register</button>
                </div>
              </div>
            </div>
            }
        </>
    )
}