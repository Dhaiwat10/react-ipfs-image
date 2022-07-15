# react-ipfs-image

Easily render images from IPFS.

## Installation

```bash
npm install react-ipfs-image

yarn add react-ipfs-image
```

## Getting started

```tsx
import { IpfsImage } from 'react-ipfs-image';

const Page = () => {
  return (
    <>
      {/* works with both of the following formats */}
      <IpfsImage hash='ipfs://Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH'>
      <IpfsImage hash='Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH'>

      {/* you can pass in a gateway URL of your choice. the default gateway url is `https://ipfs.infura.io/ipfs` */}
      <IpfsImage hash='Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH' gatewayUrl='https://gateway.pinata.cloud/ipfs'>

      {/* you can also pass in *any* props you can pass to a native HTML `img` tag */}
      <IpfsImage hash='Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH' alt='my image' className='mt-2 rounded' onClick={() => {}} />
    </>
  )
}
```

This package also has `<IpfsVideo />`, `<IpfsAudio />` and `<IpfsMedia />` that work similarly to `<IpfsImage />`.

Made by [Dhaiwat](https://twitter.com/dhaiwat10)! :)
