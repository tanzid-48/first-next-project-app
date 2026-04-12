import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6 bg-purple-300">

            <span className="loading loading-spinner loading-lg text-purple-500"></span>
            <p className="text-gray-500 animate-pulse text-5xl">
                Loading amazing apps...
            </p>


        </div>
    );
};

export default Loading;