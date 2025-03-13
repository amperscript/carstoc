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

                <div className="bg-white rounded-lg shadow-sm p-8 h-[230px] mb-8 relative">
                    <div className="flex">
                        <div className="w-2/3">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={'mb-2'}>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 14.0625H20.625V15.9375H13.125V14.0625Z" fill="#1843A8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 9.375H20.625V11.25H13.125V9.375Z" fill="#1843A8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.125 18.75H20.625V20.625H13.125V18.75Z" fill="#1843A8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 9.375H11.25V11.25H9.375V9.375Z" fill="#1843A8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 14.0625H11.25V15.9375H9.375V14.0625Z" fill="#1843A8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 18.75H11.25V20.625H9.375V18.75Z" fill="#1843A8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6875 5.625L5.625 4.6875H24.375L25.3125 5.625V24.375L24.375 25.3125H5.625L4.6875 24.375V5.625ZM6.5625 6.5625V23.4375H23.4375V6.5625H6.5625Z" fill="#1843A8"/>
                            </svg>
                            <div className="flex items-center">
                                <h2 className="text-base text-black  font-bold">Каталог запчастей по VIN / FRAME</h2>
                            </div>
                            <p className="text-sm text-[#878787] mb-8 mt-0">Подбор запчастей индивидуально для вашего автомобиля</p>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Введите VIN или Frame"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 placeholder-[#BBBBBB] focus:ring-blue-500"
                                />
                                <button className="absolute right-0 top-0 h-full px-4 rounded-r-md border border-l-0 border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <div className="absolute bottom-0 top-auto right-0 ">
                                <Image
                                    src="/vin-block.png"
                                    alt="Engine"
                                    width={250}
                                    height={250}
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