import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { signOutUser } from "@/lib/actions/user.actions";
export function DesktopMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border bg-yellow-500 text-white hover:bg-white hover:border-yellow-500 hover:text-yellow-500">
                    John
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2" align="start">
                <div className="flex items-center mb-2">
                    <ModeToggle />
                    <p className="text-base ml-2">Toggle theme</p>
                </div>
                <DropdownMenuSeparator />
                <Button onClick={signOutUser} className="w-52 hover:text-yellow-600 hover:bg-neutral-300">
                    <LogOut /> Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
