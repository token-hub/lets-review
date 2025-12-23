"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCode } from "lucide-react";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { signInSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInDefaultValues } from "@/lib/constants";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: signInDefaultValues,
    });

    const onSubmit: SubmitHandler<z.infer<typeof signInSchema>> = async (data) => {
        try {
            console.log(data);
            // do server action here
        } catch (err) {
            // modify the error as needed
            setError("email", {
                message: "something went wrong",
            });
        }
    };

    console.log(errors);
    return (
        <div className="h-full flex justify-center items-center h-minus-header">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                <Card>
                    <CardHeader className="space-y-2 place-items-center">
                        <Link href="/" className="hover:cursor-pointer">
                            <SearchCode className="w-18 h-18 m-0 text-yellow-500" />
                        </Link>
                        <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">
                                    Email <span className="text-red-700">*</span>
                                </Label>
                                <Input {...register("email")} type="email" placeholder="email@gmail.com" />
                                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">
                                        Password <span className="text-red-700">*</span>
                                    </Label>
                                </div>
                                <Input {...register("password")} type="password" placeholder="********" />
                                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button disabled={isSubmitting} type="submit" className="w-full hover:cursor-pointer">
                            {isSubmitting && <Spinner />} Login
                        </Button>

                        <Link href="/sign-up" className="text-sm text-center text-muted-foreground">
                            {"don't have an account?"} <span className="text-yellow-500 font-bold">Sign Up</span>
                        </Link>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default SignUp;
