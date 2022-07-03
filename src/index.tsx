import React, { FC, HTMLAttributes } from 'react';

export interface IIpfsImageProps extends HTMLAttributes<HTMLImageElement> {
  hash: string;
  gatewayUrl?: string;
}

export const IpfsImage: FC<IIpfsImageProps> = ({
  hash,
  gatewayUrl = 'https://ipfs.infura.io/ipfs',
  ...props
}) => {
  return <img src={`${gatewayUrl}/${hash}`} {...props} />;
};
