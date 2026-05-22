import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[30vh] items-center justify-center text-2xl font-semibold text-purple-400'>
            Animals Loading
            <span className='loading loading-dots loading-xl'></span>
        </div>
    );
};

export default LoadingPage;