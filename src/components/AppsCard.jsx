
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import InstallButton from './InstallButton';

const AppsCard = ({ app, id }) => {

    const { title, image, ratingAvg, downloads, size, companyName } = app;

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
                        <Link href={`/apps/${app.id}`} className="btn btn-accent">
                            Show Details
                        </Link>
                        <InstallButton app = {app}></InstallButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsCard;
// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React from 'react';

// const AppsCard = ({ app }) => {

//     const { title, image, ratingAvg, downloads, size, companyName } = app;
//     const router = useRouter();

//     const handleInstall = () => {
//         const saved = localStorage.getItem('installedApps');
//         const installedApps = saved ? JSON.parse(saved) : [];

//         const alreadyInstalled = installedApps.find(a => a.id === app.id);

//         if (!alreadyInstalled) {
//             const updated = [...installedApps, app];
//             localStorage.setItem('installedApps', JSON.stringify(updated));
//         }

//         router.push('/installation');
//     };

//     return (
//         <div>
//             <div className="card bg-base-100 shadow-sm">
//                 <figure className="px-6 pt-6">
//                     <Image
//                         src={image}
//                         alt={title}
//                         width={200}
//                         height={160}
//                         className="rounded-xl object-contain"
//                     />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title font-bold text-2xl">{title}</h2>
//                     <p className="text-sm text-gray-500">{companyName}</p>
//                     <div className="flex items-center gap-2 text-sm">
//                         <span>⭐ {ratingAvg}</span>
//                         <span>•</span>
//                         <span>📥 {downloads}</span>
//                         <span>•</span>
//                         <span>💾 {size} MB</span>
//                     </div>
//                     <div className="card-actions mt-2 flex justify-between items-center">
//                         <Link href={`/apps/${app.id}`} className="btn btn-accent">
//                             Show Details
//                         </Link>

//                         <button
//                             onClick={handleInstall}
//                             className="btn btn-primary btn-lg"
//                         >
//                             Install Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AppsCard;