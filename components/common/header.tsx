import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchCode } from "lucide-react";
import { MobileMenu } from "./mobileMenu";
import { DesktopMenu } from "./desktopMenu";
import { auth } from "@/auth";

const Header = async () => {
    const session = await auth();

    return (
        <div className="border-b">
            <div className="wrapper">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <p className="flex">
                            <SearchCode className="mr-2 text-yellow-500" />
                            <span className="text-lg font-bold">{`Let's review`}</span>
                        </p>
                    </Link>

                    <MobileMenu />

                    <div className="hidden md:flex items-center">
                        {session?.user ? (
                            <>
                                <DesktopMenu />
                            </>
                        ) : (
                            <Link href="/sign-in">
                                <Button
                                    className="ml-2 border text-white bg-yellow-500 hover:cursor-pointer hover:border-yellow-500 hover:bg-white hover:text-yellow-500 dark:bg-yellow-500  dark:border-yellow-400
    dark:hover:bg-yellow-400 dark:hover:text-white"
                                >
                                    Sign In
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
