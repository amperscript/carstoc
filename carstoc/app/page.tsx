import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const categories = [
        { id: 1, name: 'Запчасти для ТО', count: '35644 товара', icon: '/icons/parts.svg' },
        { id: 2, name: 'Шины', count: '35644 товаров', icon: '/icons/tires.svg' },
        { id: 3, name: 'Масла / Жидкости', count: '35644 товара', icon: '/icons/oil.svg' },
        { id: 4, name: 'Диски', count: '35644 товаров', icon: '/icons/wheels.svg' },
        { id: 5, name: 'Аккумуляторы', count: '35644 товара', icon: '/icons/battery.svg' },
        { id: 6, name: 'Автохимия', count: '35644 товара', icon: '/icons/chemistry.svg' },
    ];

    return (
        <main className="min-h-screen">
            <div className="container mx-auto pt-4 px-4">
                <div className="grid grid-cols-6 gap-4 mb-6">
                    {categories.map((category) => (
                        <Link href={`/category/${category.id}`} key={category.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center">
                                <div className="text-blue-600 mb-2">
                                    {category.id === 1 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    )}
                                    {category.id === 2 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {category.id === 3 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    )}
                                    {category.id === 4 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {category.id === 5 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    )}
                                    {category.id === 6 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="text-sm font-semibold text-center">{category.name}</h3>
                                <p className="text-xs text-gray-500 text-center mt-1">{category.count}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="grid grid-cols-6 gap-4 mb-8">
                    <div className="col-span-1">
                        <div className="bg-gray-200 rounded-lg h-36 flex items-center justify-center overflow-hidden">
                            <Image src="/images/parts.jpg" alt="Запчасти для ТО" width={200} height={150} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-gray-200 rounded-lg h-36 flex items-center justify-center overflow-hidden">
                            <Image src="/images/tires.jpg" alt="Шины" width={200} height={150} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-gray-200 rounded-lg h-36 flex items-center justify-center overflow-hidden">
                            <Image src="/images/oil.jpg" alt="Масла / Жидкости" width={200} height={150} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-gray-200 rounded-lg h-36 flex items-center justify-center overflow-hidden">
                            <Image src="/images/wheels.jpg" alt="Диски" width={200} height={150} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-gray-200 rounded-lg h-36 flex items-center justify-center overflow-hidden">
                            <Image src="/images/battery.jpg" alt="Аккумуляторы" width={200} height={150} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-gray-200 rounded-lg h-36 flex items-center justify-center overflow-hidden">
                            <Image src="/images/chemistry.jpg" alt="Автохимия" width={200} height={150} className="w-full h-full object-cover" />
                        </div>
                    </div>
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