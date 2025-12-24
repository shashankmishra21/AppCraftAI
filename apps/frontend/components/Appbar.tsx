import Link from "next/link";
import { Button } from "@/components/ui/button";
export function Appbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background ">
        <div className="flex mx-auto h-14 max-w-7xl items-center justify-between px-12">
            <Link href="/" className="font-bold text-2xl tracking-tight cursor-pointer font-space-grotesk">
                AppCraftAI
            </Link>
            <Button className="cursor-pointer">
                Login
            </Button>
        </div>
        </header>
    )
}