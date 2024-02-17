import React, { useState, useEffect } from 'react';

export default function Footer(){
    
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        setCurrentYear(year.toString());
      }, [])

    return (
        <div className="w-full py-6 text-center bg-gray-800 text-gray-400">
            <p className='font-sm'>
                Powered By Hibiki {currentYear}
            </p>
        </div>
    )
}