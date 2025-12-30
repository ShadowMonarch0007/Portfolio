import React from 'react'
import { Trash2Icon } from 'lucide-react';

const Connect = () => {
    return (
        <div className='max-w-7xl flex flex-col mx-0 md:mx-0 lg:mx-19'>
            <div className="flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center lg:max-w-[45vw]">
                    Your <span className="text-red-500">Messages</span>
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 mx-1 md:mx-1.5 lg:mx-2 py-2.5 md:py-5 lg:py-10'>
                {
                    Array(5).fill().map((_, index) => (
                        <div key={index} className="w-full max-w-6xl p-4 md:p-6 lg:p-8 rounded-2xl shadow-input backdrop-blur-[2.5px] border border-[#e0e0e0] dark:border-[#202020]">
                            {/* DELETE ICON */}
                            <button className="absolute top-4 right-4 text-white hover:text-red-500 transition cursor-pointer">
                                <Trash2Icon className="w-5 h-5" />
                            </button>

                            {/* USER INFO */}
                            <div className="space-y-1 text-sm md:text-base">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Name:</span> Aditya Chandra
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Email:</span> aditya.anil.chandra@gmail.com
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Phone:</span> 6202226848
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Message:</span> test message
                                </p>
                                <p className="text-xs text-gray-500 mt-2 text-start">
                                    Wednesday, April 30, 2025 at 01:13:48 AM
                                </p>
                            </div>

                            {/* MESSAGE RESPONSE */}
                            <div className="mt-4 bg-[#fff7f7] dark:bg-[#242424] border border-[#e7caca] dark:border-[#333]
                            rounded-xl px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                fuck off
                            </div>

                            {/* TIMESTAMP */}
                            <p className="text-xs text-gray-500 mt-2 text-right">
                                Wednesday, April 30, 2025 at 01:13:48 AM
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Connect