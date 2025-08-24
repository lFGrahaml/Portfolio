'use client';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { OctagonAlertIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const formSchema = z.object({
  name: z.string().min(1, {message: "Name required"}),
  email: z.string().email(),
  password: z.string().min(1, { message: "Password required"}),
  confirmPassword: z.string().min(1, { message: "Confirm password required"}),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const SignUpView = () => {
  const router = useRouter();
  const [isError, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit =  (data: z.infer<typeof formSchema>) => {
    setIsError(null);
    setIsLoading(true);

    authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setIsLoading(false);
          router.push("/"); // TODO: change this to Commi Journal Home Page
        },
        onError: ({ error }) => {
          setIsLoading(false);
          setIsError(error.message);
        }
      }
    );
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className='flex w-full items-center justify-center'>
        <Card className='overflow-auto p-8 w-[60%] max-w-xl sm:overflow-hidden'>
          <CardContent className='grid p-0'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col  items-center text-center gap-10">
                    <h1 className="text-3xl font-bold">
                      Welcome to Commi!
                    </h1>

                    <p className="text-muted-foreground text-balance text-base">
                      Create an account
                    </p>
                  </div>

                  {/* Name Field */}
                  <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Name
                            </FormLabel>

                            <FormControl>
                              <Input
                                type="text"
                                placeholder="John Doe"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      >
                      </FormField>
                  </div>
                  {/* Email Field */}
                  <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Email
                            </FormLabel>

                            <FormControl>
                              <Input
                                type="email"
                                placeholder="JohnDoe@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      >
                      </FormField>
                  </div>

                  {/* Password Fields */}
                  <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Password
                            </FormLabel>

                            <FormControl>
                              <Input
                                type="password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      >
                      </FormField>
                  </div>

                  <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Confirm Password
                            </FormLabel>

                            <FormControl>
                              <Input
                                type="password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      >
                      </FormField>
                  </div>

                  {/*Error Alert */}
                  {!!isError && (
                    <Alert className="bg-destructive/10 border-none">
                      <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                      <AlertTitle>
                        <p className="text-xs">
                          {isError}
                        </p>
                      </AlertTitle>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer"
                  >
                    Sign up
                  </Button>

                  <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="text-muted-foreground bg-card relative px-2 z-10">
                    or continue with
                  </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant='outline'
                      type="button"
                      className="w-full  cursor-pointer"
                    >
                      Google
                    </Button>
                    <Button
                      variant='outline'
                      type="button"
                      className="w-full  cursor-pointer"
                    >
                      Apple
                    </Button>
                  </div>

                  <div className="text-center text-sm cursor-pointer">
                    Already have an account?  <Link href='sign-in' className="underline underline-offset-2">Sign in</Link>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="py-2 text-xs text-center text-balance text-muted-foreground *:[a]:underline *:[a]:underline-offset-2 *:[a]:hover:text-primary">
        By continuing, you agree to our <a href="#" >Terms of Service</a> and <a href="#">Privacy Policy</a>
      </div>
    </div>
  )
}

export default SignUpView