'use client'
import { InstallAppContext } from '@/app/context/InstallAppContext';
import React, { useContext } from 'react';


const InstallButton = ({app}) => {

    const { installedApp,setInstalledApp} = useContext(InstallAppContext);
    console.log()

   const handleInstallButton = () => {
     
  console.log("app install clicked");

  setInstalledApp([...installedApp,app]);
  toast.success(`${app.title} installed successfully!`);

}
    return (
        <>
            <div>
                <button onClick={handleInstallButton}  className="btn btn-primary btn-lg">
                    Install Now
                </button>
            </div>
        </>
    );
};

export default InstallButton;