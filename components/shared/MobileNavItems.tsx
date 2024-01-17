import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'
  

const MobileNavItems = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image src="/assets/icons/menu.svg" alt="" width={24} height={24} className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Image src="/assets/images/Logo_1.png" alt="" width={88} height={38}/>
                <Separator className="border border-black"/>
                <NavItems/>
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNavItems