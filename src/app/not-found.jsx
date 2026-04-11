import Link from 'next/link';
import React from 'react';

const NotFound   = () => {
    return (
        <div>
              <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

            <h1 className="text-7xl font-bold text-sky-500 mb-4">404</h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>

            <p className="text-gray-500 mb-6">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-sky-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
            >
                Go Back Home
            </Link>
        </div>
        </div>
    );
};
export default NotFound ;
