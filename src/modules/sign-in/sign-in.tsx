"use client";

import { Button } from "@/components/ui/button";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Loader } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <SignIn.Root>
      <Clerk.Loading>
        {() => (
          <>
            <SignIn.Step
              name="start"
              className=" space-y-6 rounded-2xl bg-background dark:bg-accent p-6 ring-1 ring-inset ring-white/5 w-full max-w-sm"
            >
              <header className="text-center">
                <h1 className="mt-4 text-2xl font-medium tracking-tight">
                  Welcome back
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                  Sign In to your account
                </p>
              </header>
              <div className="space-y-3">
                <Clerk.Loading scope="provider:google">
                  {(isGoogleLoading) => (
                    <Clerk.Loading scope="provider:apple">
                      {(isAppleLoading) => (
                        <Clerk.Loading scope="provider:github">
                          {(isGithubLoading) => {
                            const isAnyLoading =
                              isGoogleLoading ||
                              isAppleLoading ||
                              isGithubLoading;
                            return (
                              <>
                                <Clerk.Connection name="google" asChild>
                                  <Button
                                    variant={"outline"}
                                    className="w-full py-5"
                                    disabled={isAnyLoading}
                                  >
                                    {isGoogleLoading ? (
                                      <Loader className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Clerk.Icon className="mr-2 size-4" />
                                        Google
                                      </>
                                    )}
                                  </Button>
                                </Clerk.Connection>
                                <Clerk.Connection name="apple" asChild>
                                  <Button
                                    variant={"outline"}
                                    className="w-full py-5"
                                    disabled={isAnyLoading}
                                  >
                                    {isAppleLoading ? (
                                      <Loader className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Clerk.Icon className="mr-2 size-4" />
                                        Apple
                                      </>
                                    )}
                                  </Button>
                                </Clerk.Connection>
                                <Clerk.Connection name="github" asChild>
                                  <Button
                                    variant={"outline"}
                                    className="w-full py-5"
                                    disabled={isAnyLoading}
                                  >
                                    {isGithubLoading ? (
                                      <Loader className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Clerk.Icon className="mr-2 size-4" />
                                        GitHub
                                      </>
                                    )}
                                  </Button>
                                </Clerk.Connection>
                              </>
                            );
                          }}
                        </Clerk.Loading>
                      )}
                    </Clerk.Loading>
                  )}
                </Clerk.Loading>
              </div>
              <Clerk.GlobalError className="block text-sm text-red-400 w-full" />
              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href={"/agency/sign-up"}
                  className="underline text-indigo-500 hover:text-primary font-medium"
                >
                  Sign up
                </Link>
              </p>
            </SignIn.Step>
          </>
        )}
      </Clerk.Loading>
    </SignIn.Root>
  );
};

export default SignInPage;
