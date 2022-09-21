import Image from 'next/image'

const Logo = () => {
  return (
    <>
  <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="Logo" />
            <p className="text-nft-black-1 font-semibold text-lg ml-1 dark:text-white">CryptoKet</p>
            </>
  )
}

export default Logo
