"use client";

import React from "react";

import { Rocket } from "lucide-react";
import dynamic from "next/dynamic";
const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton,
    ),
  { ssr: false },
);
export const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto px-6 py-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold">MintCraft</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="hover:text-purple-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#howitworks"
              className="hover:text-purple-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#community"
              className="hover:text-purple-400 transition-colors"
            >
              Community
            </a>
          </div>
          <div className="flex gap-3">
            <WalletMultiButton className="bg-blue-600" />
          </div>
        </div>
      </nav>
    </div>
  );
};
