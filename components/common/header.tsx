import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { SearchCode } from "lucide-react";
import { MobileMenu } from "./mobileMenu";

const Header = () => {
    return (
        <div className="border-b">
            <div className="wrapper">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <p className="flex">
                            <SearchCode className="mr-2" />
                            <span className="text-lg font-bold">{`Let's review`}</span>
                        </p>
                    </Link>

                    <MobileMenu />

                    <div className="hidden md:flex items-center">
                        <ModeToggle />
                        <Button className="ml-2">Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
