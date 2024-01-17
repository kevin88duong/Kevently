import {SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNavItems from "./MobileNavItems"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between ">
            <Link href="/" className="w-36">
                <Image src="/assets/images/Logo_2.png" alt="Logo" width={140} height={40}/>
            </Link>

            <SignedIn>
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItems/>
              </nav>
            </SignedIn>


            <div className="flex w-32 justify-end gap-3">
              <SignedIn>
                <UserButton afterSignOutUrl="/"/>
                <MobileNavItems/>
              </SignedIn>
              <SignedOut>
                <Button asChild className="rounded-full" size="lg">
                  <Link href="/sign-in">
                    Login
                  </Link>
                </Button>
              </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header