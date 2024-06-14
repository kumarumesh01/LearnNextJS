// Import the CSS file from the correct path
import "@/app/ui/styles.css";  // This assumes that styles.css is directly in the 'ui' folder

import Image from "next/image";
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        <strong>Welcome to Acme.</strong> This is the example for the{' '}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>, brought to you by Vercel.
      </p>
      {/* Apply the dashboard-image class to your image */}
      <img src="/Home.png" alt="Screenshots of the dashboard project showing desktop version" className="dashboard-image"/>
    </main>
  );
}
