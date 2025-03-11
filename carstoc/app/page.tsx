'use client'

import Image from 'next/image';
import Link from 'next/link';
import CategorySlider from '@/components/CategorySlider';

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto pt-4 px-4">
                <div className="mb-8">
                    <CategorySlider />
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8 h-[200px] mb-8 relative">
                    <div className="flex">
                        <div className="w-2/3">
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <h2 className="text-base text-black font-medium">Каталог запчастей по VIN / FRAME</h2>
                            </div>
                            <p className="text-sm text-[#878787] mb-4">Подбор запчастей индивидуально для вашего автомобиля</p>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Введите VIN или Frame"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 placeholder-[#BBBBBB] focus:ring-blue-500"
                                />
                                <button className="absolute right-0 top-0 h-full px-4 rounded-r-md border border-l-0 border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-1/3 flex justify-end">
                            <div className="absolute bottom-0 top-auto right-0 ">
                                <Image
                                    src="/vin-block.png"
                                    alt="Engine"
                                    width={250}
                                    height={150}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}