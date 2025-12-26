import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export function Appbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-white/30 bg-background bg-zinc-900">
        <div className="flex mx-auto h-14 max-w-7xl items-center justify-between px-12">
            <Link href="/" className="font-bold text-2xl text-white tracking-tight cursor-pointer font-space-grotesk">
                AppCraftAI
            </Link>
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-background text-ceramic-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
        </header>
    )
}