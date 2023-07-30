'use client';


import Image from 'next/image'
import MapPage from './map.js';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <header className='flex'>Türkiye Haritası</header>
      <MapPage />
    </main>
  )
}
