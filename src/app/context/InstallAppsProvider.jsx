'use client'
import React, { useState } from 'react';
import { InstallAppContext } from './InstallAppContext';



const InstallAppsProvider = ({children}) => {

    const [installedApp,setInstalledApp] = useState([]);

    const data = {
        installedApp,
        setInstalledApp,
    }

    return (
        <InstallAppContext.Provider value={data}>
            {children}
        </InstallAppContext.Provider>
    );
};

export default InstallAppsProvider;