import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import image from "../../static/img/lancer.svg";

import "./tailwind.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className=' bg-dark'>
      <Layout
        title={`${siteConfig.title} Upload Engine for your backend`}
        description="Description will go into a meta tag in <head />">
        <header className="dark:bg-dark py-10 font-dmono mx-auto max-w-[1450px]">
          <div className=' flex items-center flex-wrap lg:flex-nowrap justify-between'>
            <div className="container mx-auto py-24 space-y-5">
              <h1 className=' text-4xl font-bold text-white font-dmono'>
                <span className=' text-primary'>{siteConfig.title}</span> an {siteConfig.tagline}
              </h1>
              <p>Lancer is a lightweight, open-source tool designed to simplify the management of file upload services. Whether you're storing files locally or uploading them directly to Amazon S3, Lancer provides a flexible and efficient solution to handle your file storage needs.</p>

              <div className="py-10 flex gap-5">
                <Link
                  className="bg-white rounded-md text-gray-500 px-4 py-2"
                  to="/docs/quickstart"
                >
                  Read Docs
                </Link>
                <Link
                  className=" text-white font-semibold rounded-md bg-primary text-gray-500 px-4 py-2"
                  to="/docs/category/installation"
                >
                  Installation
                </Link>
              </div>
            </div>

            <div className=' flex items-center justify-center'>
              <img src={"/lancer-docs/img/lancer.svg"} className=' w-4/5 h-4/5' />
            </div>
          </div>
        </header>
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
