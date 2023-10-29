import { useState } from 'react';


import arrowDown from '../assets/icon-arrow-down.svg';
import Todo from '../assets/icon-todo.svg';
import Calendar from '../assets/icon-calendar.svg';
import Reminder from '../assets/icon-reminders.svg';
import Planning from '../assets/icon-planning.svg';
import arrowUp from '../assets/icon-arrow-up.svg';


export default function NavComp(){
    const [features, setFeatures] = useState(false)
    const [company, setCompany] = useState(false)

    return(
        <div>
          
            <ul className='list-none flex gap-10 '>
                <li className="text-4xl font-bold md:font-extrabold mt-3 ">snap</li>
                <li className='hidden md:flex mt-7 cursor-pointer' onClick={()=>setFeatures((show)=> !show)}><span>Features</span><span><img src={features ? `${arrowUp} ` : `${arrowDown}`} className='mt-3 px-1' alt="arowdown" /></span></li>
                <li className='hidden md:flex mt-7 cursor-pointer' onClick={()=>setCompany((show)=>!show)}><span>Company</span><span><img src={company ? `${arrowUp}` : `${arrowDown}`} className='mt-3 px-1' alt="arowdown" /></span></li>
                <li className='hidden md:flex mt-7'>Careers</li>
                <li className='hidden md:flex mt-7'>About</li>
            </ul>

            {features &&
                <div className=''>
                <div className='bg-white rounded-xl shadow-lg  left-36 absolute hidden  md:flex md:flex-col'>
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
                    <div className='flex space-x-3 px-4 py-2'>
                    <span className='mt-1'><img src={Planning} alt="plan" /></span>
                    <p>Planning</p>
                    </div>
                </div>
                </div>
            }

            {company &&
                <div className=''>
                <div className='bg-white rounded-xl shadow-lg  left-72 absolute hidden  md:flex md:flex-col'>
                    <div className='flex space-x-3 px-4 py-2'>
                    <p>History</p>
                    </div>
                    <div className='flex space-x-3 px-4 py-1'>
                    <p>Our Team</p>
                    </div>
                    <div className='flex space-x-3 px-4 py-2'> 
                    <p>Blog</p>
                    </div>
                    
                </div>
                </div>
            }
            
        </div>
    )
}