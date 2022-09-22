import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components'

export default function Home() {
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner styles="justify-start mb-6 h-72 sm:h-60 xs:h-44 p-12 xs:p-4 rounded-3xl" textStyles="md:text-4xl sm:text-2xl xs:text-xl text-left" heading={'Discover, collect and sell extraordinary NFTs'}/>
<div >
      </div>
    </div>
  )
}
