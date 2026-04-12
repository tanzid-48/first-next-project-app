
import Image from 'next/image';
import React from 'react';

const AppsCard = ({ app }) => {

    const { title,image,ratingAvg, downloads, size,companyName} = app;

    return (
        <div>
             <div className="card bg-base-100 shadow-sm">
            <figure className="px-6 pt-6">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={160}
                    className="rounded-xl object-contain"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p className="text-sm text-gray-500">{companyName}</p>
                <div className="flex items-center gap-2 text-sm">
                    <span>⭐ {ratingAvg}</span>
                    <span>•</span>
                    <span>📥 {downloads}</span>
                    <span>•</span>
                    <span>💾 {size} MB</span>
                </div>
                <div className="card-actions  mt-2 flex justify-between items-center">
                    <button className="btn btn-primary">Install</button>
                    <button className="btn btn-accent ">Show Details</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AppsCard;