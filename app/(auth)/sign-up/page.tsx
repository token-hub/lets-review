"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchCode } from "lucide-react";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodError } from "zod";
import { signUpSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpDefaultValues } from "@/lib/constants";
import { signUp } from "@/lib/actions/signUp.actions";
import { redirect } from "next/navigation";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: signUpDefaultValues,
    });

    const onSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = async (data) => {
        try {
            const result = await signUp(data);

            if (result.success) {
                redirect("/");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError("root", { message: err.message });
            } else {
                setError("root", { message: "Something went wrong" });
            }
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
                                <Label htmlFor="name">
                                    Name <span className="text-red-700">*</span>
                                </Label>
                                <Input {...register("name")} type="text" placeholder="john doe" />
                                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                            </div>
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
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="con-password">
                                        Confirm Password <span className="text-red-700">*</span>
                                    </Label>
                                </div>
                                <Input {...register("confirmPassword")} type="password" placeholder="********" />
                                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                            </div>

                            {errors.root && <div className="text-sm text-destructive">{errors.root.message}</div>}
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button disabled={isSubmitting} type="submit" className="w-full hover:cursor-pointer">
                            {isSubmitting && <Spinner />} Submit
                        </Button>

                        <Link href="/sign-in" className="text-sm text-center text-muted-foreground">
                            Already have an account? <span className="text-yellow-500 font-bold">Sign In</span>
                        </Link>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};

export default SignUp;
