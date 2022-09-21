import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import { Button, Logo } from './'

import images from "../assets"

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">
      {heading}
    </h3>

    {items.map((item, index) => (
      <p key={index} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3">{item}</p>
    ))}
  </div>
)


const Footer = () => {
  const socialLogos = [images.instagram, images.twitter, images.telegram, images.discord]
  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">

      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Logo />
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">Get the latest updates</p>

          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border-nft-gray-2 border dark:border-nft-black-2 rounded-md">
            <input type="email" name="" id="" placeholder='Your Email' className='h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none' />
            <div className="flex-initial">
              <Button name={'Email me'} styles='rounded-md' />
            </div>
          </div>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks heading="CryptoKat" items={['Explore', 'How it Works', 'Contact Us'] } />

            <FooterLinks heading="Support" items={['Help center', 'Terms of service', 'Legal', 'Privacy Policy'] } />
</div>

      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">CryptoKet, Inc. All Rights Reserved.</p>
          <div className="flex flex-row sm:mt-4">
            {socialLogos.map(image, index) => (
            <div className="mx-2 cursor-pointer" key={index}>
              <Image
                src={image}
                objectFit="contain"
                width={24}
                height={24}
                alt="social"
                className={theme === 'light' && 'filter invert'}
              />
            </div>
)}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
