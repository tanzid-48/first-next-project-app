'use client'
import React, { useContext } from 'react';
import { InstallAppContext } from '../context/InstallAppContext';
import Image from 'next/image';
import { toast } from 'sonner';

const InstalledPage = () => {

    const { installedApp, setInstalledApp } = useContext(InstallAppContext);

    const handleUninstall = (app) => {
        setInstalledApp(installedApp.filter(a => a.id !== app.id));
        toast.error(`${app.title} uninstalled!`);
    }

    return (
        <div className="w-11/12 mx-auto px-4 py-8">
           
            {installedApp.length === 0 ? (
                <p className="text-gray-500 text-4xl text-center mt-20">No apps installed yet.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {installedApp.map((app) => (
                        <div key={app.id} className="card bg-base-100 shadow-sm">
                            <div className="flex items-center justify-between px-6 py-4">
                                
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={app.image}
                                        alt={app.title}
                                        width={70}
                                        height={70}
                                        className="rounded-xl object-contain"
                                    />
                                    <div>
                                        <h2 className="font-bold text-lg">{app.title}</h2>
                                        <p className="text-sm text-gray-500">{app.companyName}</p>
                                        <span className="text-sm">⭐ {app.ratingAvg}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleUninstall(app)}
                                    className="btn btn-error btn-sm">
                                    Uninstall
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InstalledPage;