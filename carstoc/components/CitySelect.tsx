'use client'

import React, {useEffect, useRef, useState} from "react";

interface CityGroupProps{
    letter: string,
    cities: string[],
    onCitySelect: (city: string) => void,
}

const CityGroup: React.FC<CityGroupProps> = ({letter, onCitySelect, cities}) => {
    return (
        <div className={'mb-4 flex flex-row items-start'}>
            <div className={'text-blue-600 font-bold text-lg mb-2 mr-3'}>{letter}</div>
            <div className={'flex flex-col mt-1 text-black space-y-2'}>
                {cities.map((city) => (
                    <div className={'hover:text-blue-600 text-black cursor-pointer'} key={city} onClick={()=> onCitySelect(city)}>{city}</div>
                    ))}
            </div>
        </div>
    )
}

interface CitySelectorProps {
    initialCity?: string;
    onCityChange: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({
    initialCity = 'Москва',
    onCityChange
}) => {
    const [currentCity, setCurrentCity] = useState(initialCity);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const cityGroups = {
        'А': ['Абакан', 'Архангельск'],
        'Б': ['Белград'],
        'В': ['Варшава'],
        'Г': ['Геленджик'],
        'Д': ['Даламан'],
        'К': ['Климовск', 'Клин', 'Калининград'],
        'Л': ['Лисабон', 'Лондон'],
        'М': ['Мадрид', 'Москва'],
        'Н': ['Наро-Фоминск'],
        'П': ['Подольск', 'Париж'],
        'Р': ['Рим'],
    };

    const handleCitySelect = (city: string) => {
        setCurrentCity(city);
        setIsModalOpen(false)
        if (onCityChange){
            onCityChange(city);
        }
    }

    useEffect(()=> {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)){
                setIsModalOpen(false)
            }
        }

        if(isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return()=>{
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [isModalOpen])
return(
    <div className="relative">
        <div className="flex items-center space-x-2" onClick={() => setIsModalOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="cursor-pointer text-blackhover:text-blue-600">{currentCity}</span>
        </div>

        {isModalOpen && (
            <div className="fixed inset-0 w-full bg-opacity-50 backdrop-blur-md z-50 flex items-start justify-center pt-16">
                <div
                    ref={modalRef}
                    className="bg-white rounded-[21px] shadow-lg p-6 w-lg m-[20px] max-w-lg"
                >
                    <div className="flex justify-between items-center mb-0">
                        <h2 className="text-lg text-black text-center m-auto font-bold">Выбор города</h2>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-gray-600 text-center mb-4">Выберите свой город из предложенных ниже</p>

                    <div className="grid grid-cols-3 gap-4">
                        {Object.entries(cityGroups).map(([letter, cities]) => (
                            <CityGroup
                                key={letter}
                                letter={letter}
                                cities={cities}
                                onCitySelect={handleCitySelect}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
);
};

export default CitySelector;