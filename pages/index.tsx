import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Tab } from '@headlessui/react'
import Masonry from 'react-masonry-css'
import classNames from 'classnames'

//import photos
import photo2 from '../assets/allPhotos/_DSC6476.jpg'
import photo1 from '../assets/allPhotos/_DSC6294.jpg'
import photo3 from '../assets/allPhotos/_DSC6865.jpg'
import photo4 from '../assets/allPhotos/_DSC6943.jpg'
import photo5 from '../assets/allPhotos/_DSC7003.jpg'
import photo6 from '../assets/allPhotos/_DSC7143.jpg'
import photo7 from '../assets/allPhotos/_DSC7191.jpg'
import photo8 from '../assets/allPhotos/_DSC7295.jpg'
import photo9 from '../assets/allPhotos/_DSC7898.jpg'
import photo10 from '../assets/allPhotos/427 (34).jpg'
import photo11 from '../assets/allPhotos/5620 (8).jpg'
import photo12 from '../assets/allPhotos/000000180009.jpg'
import photo13 from '../assets/allPhotos/000000840026.jpg'
import photo14 from '../assets/allPhotos/000000940011.jpg'
import photo15 from '../assets/allPhotos/000000950006.jpg'
import photo16 from '../assets/allPhotos/000002590015.jpg'
import photo17 from '../assets/allPhotos/000002640002.jpg'
import photo18 from '../assets/allPhotos/000003680002.jpg'
import photo19 from '../assets/allPhotos/000003680006.jpg'
import photo20 from '../assets/allPhotos/000003680007.jpg'
import photo21 from '../assets/allPhotos/000004220009.jpg'
import photo22 from '../assets/allPhotos/000004410016.jpg'
import photo23 from '../assets/allPhotos/000004410029.jpg'
import photo24 from '../assets/allPhotos/000008740008.jpg'
import photo25 from '../assets/allPhotos/000008740031.jpg'
import photo26 from '../assets/allPhotos/000010410012.jpg'
import photo27 from '../assets/allPhotos/000011880005.jpg'
import photo28 from '../assets/allPhotos/000011880008.jpg'
import photo29 from '../assets/allPhotos/000011880020.jpg'
import photo30 from '../assets/allPhotos/000012230001.jpg'
import photo31 from '../assets/allPhotos/000013000016.jpg'
import photo32 from '../assets/allPhotos/000013960005.jpg'
import photo33 from '../assets/allPhotos/000014380007.jpg'
import photo34 from '../assets/allPhotos/000016300008.jpg'
import photo35 from '../assets/allPhotos/000017990010.jpg'
import photo36 from '../assets/allPhotos/000031200009.jpg'
import photo37 from '../assets/allPhotos/000040300007.jpg'
import photo38 from '../assets/allPhotos/000050770007.jpg'
import photo39 from '../assets/allPhotos/000050780037.jpg'
import photo40 from '../assets/allPhotos/87840007.jpg'
import photo41 from '../assets/allPhotos/000092210002.jpg'
import photo42 from '../assets/allPhotos/A83DB799-2803-41C2-A2FF-18B370288188.jpg'
import photo43 from '../assets/allPhotos/DSC00238.jpg'
import photo44 from '../assets/allPhotos/DSC04716.jpg'
import photo45 from '../assets/allPhotos/F2E7EABD-7019-4CA6-ADBC-A7B0D22809EC.jpg'
import photo46 from '../assets/allPhotos/IMG_3038.jpg'
import photo47 from '../assets/allPhotos/IMG_5638.jpg'
import photo48 from '../assets/allPhotos/IMG_5644.jpg'
import photo49 from '../assets/allPhotos/IMG_6004.jpg'
import photo50 from '../assets/allPhotos/IMG_6804.jpg'

import Ianmac from '/public/ianmac.png'


import type { LightGallery } from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useRef } from 'react'


const inter = Inter({ subsets: ['latin'] })
const tabs = [
  {
    key: 'all',
    display: 'All'
  },
]
const images = [
  photo6,
  photo2,
  photo3,
  photo4,
  photo11,
  photo1,
  photo5,
  photo7,
  photo9,
  photo10,
  photo12,
  photo8,
  photo18,
  photo13,
  photo15,
  photo16,
  photo17,
  photo14,
  photo19,
  photo20,
  photo21,
  photo22,
  photo29,
  photo24,
  photo25,
  photo23,
  photo26,
  photo34,
  photo28,
  photo31,
  photo27,
  photo32,
  photo33,
  photo30,
  photo35,
  photo36,
  photo37,
  photo43,
  photo39,
  photo40,
  photo41,
  photo38,
  photo42,
  photo49,
  photo44,
  photo46,
  photo47,
  photo48,
  photo45,
  photo50
]

export default function Home() {
  const lightboxRef = useRef < LightGallery | null > (null)

  return (
    <div className='flex flex-col h-full bg-black overflow-auto'>
      <Head>
        <title>Ian McIntosh - Photography Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/camera.png" />
      </Head>

      <header className='top-0 w-full z-30 flex justify-between items-center h-[90px] px-6'>
        <Image src={Ianmac} alt='logo' className='w-[290px]'/>
        <Link href='https://ianmac.vercel.app/contact' className='rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90'>
          Get in touch
        </Link>
      </header>

      <main className='bg-black pt-[110px] z-29'>
        <div className='flex flex-col items-center h-full'>
          <Tab.Group>
            <Tab.List className='flex items-center gap-12'>
              {tabs.map((tab) => (
                <Tab key={tab.key} className='p-2'>
                  {({ selected }) => (
                    <span
                      className={classNames('uppercase text-lg',selected ? 'text-white' : 'text-stone600')}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='h-full max-w-[900px] w-full p-2 sm:p-4 my-6'>
              <Tab.Panel className=''>
                <Masonry breakpointCols={2} className='flex gap-4' columnClassName=''>
                  
                  {images.map((image, idx) => (
                    <Image 
                      src={image} 
                      alt='portfolio photo' 
                      className='my-4 hover:opacity-90 cursor-pointer' 
                      placeholder='blur' 
                      key={image.src}
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx)
                      }}/>
                  ))}

                </Masonry>

                <LightGalleryComponent 
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance
                    }
                  }} 
                  speed={500} 
                  plugins={[lgThumbnail, lgZoom]} 
                  dynamic 
                  dynamicEl={images.map(image => ({
                    src: image.src,
                    thumb: image.src,
                  }))}/>
              </Tab.Panel>
              <Tab.Panel>Street Photography</Tab.Panel>
              <Tab.Panel>Portrait Photography</Tab.Panel>
              <Tab.Panel>Other Photos</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className='h-[90px] flex justify-center items-center uppercase text-large font-medium z-20'>
        <p>Portfolio</p>
      </footer>
    </div>
  )
}
