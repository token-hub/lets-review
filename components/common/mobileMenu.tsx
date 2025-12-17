import { Menu, LogIn } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function MobileMenu() {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Menu />
                </SheetTrigger>
                <SheetContent className="flex flex-col items-start">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>

                    <div className="px-6 flex flex-col w-full">
                        <div className="flex items-center mb-4">
                            <ModeToggle />
                            <p className="text-base ml-2">Toggle theme</p>
                        </div>
                        <Button asChild className="w-full">
                            <Link href="/">
                                <LogIn /> Sign In
                            </Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
