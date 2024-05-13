"use client";

import { Loader2, X } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useState } from "react";

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export default function Page() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
      />
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="space-y-4 pt-16 text-center">
          <h1 className="text-3xl font-bold text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or create an account to access dashboard!
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          {/* <ClerkLoading></ClerkLoading> */}
          <button
            onClick={() => setLoading(true)}
            className="mx-auto flex h-10 items-center justify-center rounded-lg bg-[#39C3EF] px-8 text-sm font-medium text-black transition duration-200 hover:bg-[#39C3EF]/90 md:text-base"
            style={{
              boxShadow:
                "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
            }}
          >
            Click to load
          </button>
          {loading && (
            <button
              className="fixed right-4 top-4 z-[120] text-black dark:text-white"
              onClick={() => setLoading(false)}
            >
              <X className="h-10 w-10" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
