"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Navigator from '@/components/ui/Navigator';
import {
  CircleUserRound,
  Compass,
  Lightbulb,
  Youtube,
  Code,
  ArrowUpFromLine,
  BrainCircuit,
} from "lucide-react";

import { Context } from "@/context/ContextProvider";
import Navbar from "./ui/Navbar";
const AuroraBody = () => {
  const {
    submit,
    recentPrompts,
    displayResult,
    loading,
    result,
    input,
    setInput,
  } = useContext(Context);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsInputEmpty(e.target.value.trim() === "");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isInputEmpty) {
      submit(); // Call the submit function from context provider
    }
  };
  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      {/* <Navigator /> */}
      <Navbar/>
      <div className="max-w-[900px] m-auto">
        {!displayResult ? (
          <>
            <div className="my-12 text-5xl font-medium p-5">
              <p>
                <span className="font-bold text-zinc-300">
                  {/* text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 */}
                  Hello, I am SAGE

                </span>
              </p>

              <p>How can I help you today?</p>
            </div>
            
          </>
        ) : (
          <div className="result p-5">
          <div class="flex flex-col items-start mb-1 gap-5 text-gray-50 rounded-2xl p-5 w-full">
          {/* bg-bgSecondaryColor */}
                  <p class="text-zinc-400">You</p>
                  <p>{recentPrompts}</p>
        </div>
        <div class="flex flex-col items-start mb-10 gap-5 text-gray-50 rounded-2xl p-5 w-full">
          <p class="text-zinc-400">Sage</p>
          <p class="text-md font-normal loading-6" dangerouslySetInnerHTML={{ __html: result }}></p>
        </div>

          </div>
        )}
        <div className="bottom-0 w-full max-w-[900px] px-5 m-auto fixed pt-5 bg-[#000000]">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-5 border border-zinc-800 py-1.5 pr-5 pl-2 rounded-lg">
              {/* bg-bgSecondaryColor */}
              <input
                onChange={handleInputChange}
                value={input}
                type="text"
                className="flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400"
                placeholder="message sage..."
              />
              <div className={`flex cursor-pointer ${isInputEmpty ? 'pointer-events-none' : ''}`}>
                <button
                  type="submit"
                  className={`focus:outline-none ${isInputEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ArrowUpFromLine size={20} className=" hover:text-zinc-100" />
                </button>
              </div>
            </div>
          </form>
           <p className="text-gray-400 text-xs	 text-center p-2">
            SAGE can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuroraBody;