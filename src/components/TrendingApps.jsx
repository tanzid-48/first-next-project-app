import fs from 'fs';
import path from 'path'
import React from 'react';
import AppsCard from './AppsCard';

const TrendingApps =async() =>{
const filePath = path.join(process.cwd(), 'public', 'data.json');
const apps = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // const res = await fetch('http://localhost:3000/data.json')
    // const apps = await res.json()
    // console.log(apps,"hello")

    return (
        <>
            <div className="py-16 text-center">
                <h2 className="text-4xl font-bold mb-4">Trending Apps</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Discover the most popular apps loved by millions worldwide.
                    From productivity tools to creative platforms, explore what
                    everyone is talking about right now.
                </p>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {
             apps.map(app => <AppsCard key={app.id} app ={app}></AppsCard>)
            }
           </div>

        </>
    );
};

export default TrendingApps;