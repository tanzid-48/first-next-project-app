import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-base-100">

            <span className="loading loading-spinner loading-lg text-purple-500"></span>
            <p className="text-gray-500 animate-pulse text-4xl">
                Loading amazing apps...
            </p>


        </div>
    );
};

export default Loading;