'use client'
import React, { useContext } from 'react';
import { InstallAppContext } from '../context/InstallAppContext';

const InstalledPage = () => {

    const {installedApp} = useContext(InstallAppContext);
    console.log('from install app',installedApp);
    return (
        <div>
            <h1>this is install page</h1>
        </div>
    );
};

export default InstalledPage;