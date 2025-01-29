"use client";

import React from 'react'
import Logo from './logo';
import MenuToggle from './menu-toggle';
import { ModeToggle } from './mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
       <div className="md:w-[95%] w-[92%] mx-auto 
       flex items-center justify-between">
        <div className="flex items-center gap-5">
           <Logo/>
           <MenuToggle/>
        </div>
        <div className="flex gap-8 items-center">
           <ModeToggle/>
            <span className='max-md:hidden'>
                Welcome To My Soul Society
            </span>
            <Avatar>
              <AvatarImage src="profile.webp"/>
              <AvatarFallback>NE</AvatarFallback>
            </Avatar>
        </div>

       </div>
    </nav>
  )
}

export default Navbar;