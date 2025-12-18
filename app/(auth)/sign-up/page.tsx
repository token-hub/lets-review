import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCode } from "lucide-react";
import Link from "next/link";

const SignUp = () => {
    return (
        <div className="h-full flex justify-center items-center h-minus-header">
            <Card className="w-full max-w-sm ">
                <CardHeader className="space-y-2 place-items-center">
                    <Link href="/" className="hover:cursor-pointer">
                        <SearchCode className="w-18 h-18 m-0 text-yellow-500" />
                    </Link>
                    <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">
                                    Name <span className="text-red-700">*</span>
                                </Label>
                                <Input id="name" type="text" placeholder="john doe" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">
                                    Email <span className="text-red-700">*</span>
                                </Label>
                                <Input id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">
                                        Password <span className="text-red-700">*</span>
                                    </Label>
                                </div>
                                <Input id="password" type="password" placeholder="*******" minLength={6} required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="con-password">
                                        Confirm Password <span className="text-red-700">*</span>
                                    </Label>
                                </div>
                                <Input id="con-password" type="password" placeholder="*******" minLength={6} required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full hover:cursor-pointer">
                        Login
                    </Button>

                    <Link href="/sign-in" className="text-sm text-center text-muted-foreground">
                        Already have an account? <span className="text-yellow-500 font-bold">Sign In</span>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default SignUp;
