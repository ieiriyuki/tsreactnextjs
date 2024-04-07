import { NextPage } from 'next'
import Image from 'next/image'
import BibleImage from '../public/images/bible.jpg'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>Compare Images</h1>
      <p>use img tag</p>
      <img src='/images/bible.jpg' alt='bible' />
      <p>use next/image Image</p>
      <Image src={BibleImage} alt="bible" />
    </div>
  )
}

export default ImageSample

{/*
  next.config.js
  @type {import('next').NextConfig}
  const nextConfig = {
    reactStrictMode: true,
    images: {
      example.comの画像をImageコンポーネントで表示するために追加
      domains: ['example.com'],
    }
  }
  module.exports = nextConfig
*/}
