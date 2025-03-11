// components/CategorySlider.tsx
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
    id: number;
    name: string;
    count: string;
    icon: string;
}

export default function CategorySlider() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const categories = [
        { id: 1, name: 'Запчасти для ТО', count: '35644 товаров', icon: '/icons/parts.svg' },
        { id: 2, name: 'Шины', count: '35644 товаров', icon: '/icons/tires.svg' },
        { id: 3, name: 'Масла / Жидкости', count: '35644 товаров', icon: '/icons/oil.svg' },
        { id: 4, name: 'Диски', count: '35644 товаров', icon: '/icons/wheels.svg' },
        { id: 5, name: 'Аккумуляторы', count: '35644 товаров', icon: '/icons/battery.svg' },
        { id: 6, name: 'Автохимия', count: '35644 товаров', icon: '/icons/chemistry.svg' },
    ];

    const categoryImages = {
        1: '/slider/parts.png',
        2: '/slider/tires.png',
        3: '/slider/oil.png',
        4: '/slider/wheels.png',
        5: '/slider/battery.png',
        6: '/slider/chemistry.png',
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const { clientWidth } = sliderRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const startDragging = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);

        if ('touches' in e) {
            setStartX(e.touches[0].pageX);
        } else {
            setStartX(e.pageX);
        }

        if (sliderRef.current) {
            setScrollLeft(sliderRef.current.scrollLeft);
        }
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    const move = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;

        e.preventDefault();
        let x;

        if ('touches' in e) {
            x = e.touches[0].pageX;
        } else {
            x = e.pageX;
        }

        const walk = (x - startX) * 2;
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', handleScroll);
            return () => slider.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="relative">
            {showLeftArrow && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            <div
                ref={sliderRef}
                className="flex overflow-x-auto scrollbar-hide scroll-smooth py-4 gap-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseDown={startDragging}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={move}
                onTouchStart={startDragging}
                onTouchEnd={stopDragging}
                onTouchMove={move}
            >
                {categories.map((category) => (
                    <div key={category.id} className="flex-none w-64 md:w-52">
                        <Link href={`/category/${category.id}`} className="block">
                            <div className="bg-white rounded-lg h-[279px] flex flex-col items-center shadow-sm">
                                <div className="text-blue-600 mb-2">
                                    <Image src={category.icon} alt={category.name} width={32} height={32} />
                                </div>
                                <h3 className="text-sm font-semibold text-center">{category.name}</h3>
                                <p className="text-xs text-gray-500 text-center mt-1">{category.count}</p>
                                <div className="bg-gray-200 rounded-lg overflow-hidden mt-2 w-full">
                                    <Image
                                        src={categoryImages[category.id as keyof typeof categoryImages]}
                                        alt={category.name}
                                        width={200}
                                        draggable="false"
                                        height={80}
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>

                        </Link>
                    </div>
                ))}
            </div>

            {showRightArrow && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2"
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}