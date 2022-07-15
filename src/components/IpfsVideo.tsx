import React from 'react';
import { HTMLAttributes, FC } from 'react';
import { cleanUpHash, DEFAULT_IPFS_GATEWAY_URL } from '../utils';

export interface IIpfsVideoProps extends HTMLAttributes<HTMLVideoElement> {
  hash: string;
  gatewayUrl?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export const IpfsVideo: FC<IIpfsVideoProps> = ({
  hash,
  gatewayUrl = DEFAULT_IPFS_GATEWAY_URL,
  autoPlay = true,
  muted = true,
  controls = true,
  loop = true,
  ...props
}) => {
  return (
    <video loop autoPlay muted controls {...props}>
      <source src={`${gatewayUrl}/${cleanUpHash(hash)}`} />
    </video>
  );
};
