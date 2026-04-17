'use client'
import { InstallAppContext } from '@/app/context/InstallAppContext';
import React, { useContext } from 'react';
import { toast } from 'sonner';


const InstallButton = ({app}) => {

    const { installedApp,setInstalledApp} = useContext(InstallAppContext);
    console.log()

   const handleInstallButton = () => {
     const alreadyInstalled = installedApp.find(a => a.id === app.id);
      if (alreadyInstalled) {
    toast.error("Already installed!");
    return;
  }
    
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