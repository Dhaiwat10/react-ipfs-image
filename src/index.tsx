import React, { FC, HTMLAttributes } from 'react';

const cleanUpHash = (hash: string) => {
  // remove the leading 'ipfs://' if it exists
  if (hash.startsWith('ipfs://')) {
    return hash.substring(7);
  }
  return hash;
};

export interface IIpfsImageProps extends HTMLAttributes<HTMLImageElement> {
  hash: string;
  gatewayUrl?: string;
}

export const IpfsImage: FC<IIpfsImageProps> = ({
  hash,
  gatewayUrl = 'https://ipfs.infura.io/ipfs',
  ...props
}) => {
  return <img src={`${gatewayUrl}/${cleanUpHash(hash)}`} {...props} />;
};
