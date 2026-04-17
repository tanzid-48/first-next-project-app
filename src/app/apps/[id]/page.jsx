import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { FaBuilding, FaDownload, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const DetailsPage = async ({ params }) => {
    const { id } = await params;

    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const apps = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const app = apps.find(a => a.id === Number(id));

    if (!app) {
        return <div>App not found.</div>;
    }

      let totalRatings = 0;
  app.ratings.forEach((rating) => {
    totalRatings += rating.count;
  });

    return (

          <main className="bg-base-100">
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl bg-base-200 shadow-xl relative h-96">
            <Image
              src={app.image}
              alt={app.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg md:p-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                App details
              </p>
              <h1 className="text-3xl font-black md:text-5xl">{app.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-base-content/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 font-medium">
                  <FaBuilding />
                  {app.companyName}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 font-medium">
                  <FaStar className="text-warning" />
                  {app.ratingAvg}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 font-medium">
                  <FaDownload className="text-success" />
                  {app.downloads}
                </span>
              </div>
            </div>

            <p className="text-base leading-7 text-base-content/75">
              {app.description}
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-base-200 p-4">
                <p className="text-sm text-base-content/60">Size</p>
                <p className="mt-1 text-xl font-bold">{app.size} MB</p>
              </div>
              <div className="rounded-2xl bg-base-200 p-4">
                <p className="text-sm text-base-content/60">Reviews</p>
                <p className="mt-1 text-xl font-bold">{app.reviews}</p>
              </div>
              <div className="rounded-2xl bg-base-200 p-4">
                <p className="text-sm text-base-content/60">Downloads</p>
                <p className="mt-1 text-xl font-bold">{app.downloads}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* <InstallToggleButton app={app} /> */}
              {/* <InstallToggleButton app={app} /> */}
              <Link href="/installation" className="btn btn-primary btn-lg">
               Install Now
              </Link>
               <Link href="/apps" className="btn btn-ghost btn-lg">
                Back to apps
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg md:p-8">
          <h2 className="text-2xl font-bold">Ratings breakdown</h2>
          <div className="mt-6 space-y-4">
            {app.ratings.map((rating) => {
              const width = Math.max((rating.count / totalRatings) * 100, 4);

              return (
                <div
                  key={rating.name}
                  className="grid gap-2 md:grid-cols-[120px_1fr_110px] md:items-center"
                >
                  <span className="font-medium text-base-content/70">
                    {rating.name}
                  </span>
                  <div className="h-3 overflow-hidden rounded-full bg-base-200">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <span className="text-right font-semibold">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
       
    );z
};

export default DetailsPage;