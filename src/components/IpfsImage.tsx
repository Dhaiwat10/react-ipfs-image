import React from 'react';
import { HTMLAttributes, FC } from 'react';
import { cleanUpHash, DEFAULT_IPFS_GATEWAY_URL } from '../utils';

export interface IIpfsImageProps extends HTMLAttributes<HTMLImageElement> {
  hash: string;
  gatewayUrl?: string;
}

export const IpfsImage: FC<IIpfsImageProps> = ({
  hash,
  gatewayUrl = DEFAULT_IPFS_GATEWAY_URL,
  ...props
}) => {
  return <img src={`${gatewayUrl}/${cleanUpHash(hash)}`} {...props} />;
};
