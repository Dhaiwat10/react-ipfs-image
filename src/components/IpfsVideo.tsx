import React, { FC, MediaHTMLAttributes } from 'react';
import { cleanUpHash, DEFAULT_IPFS_GATEWAY_URL } from '../utils';

export interface IIpfsVideoProps extends MediaHTMLAttributes<HTMLVideoElement> {
  hash: string;
  gatewayUrl?: string;
}

export const IpfsVideo: FC<IIpfsVideoProps> = ({
  hash,
  gatewayUrl = DEFAULT_IPFS_GATEWAY_URL,
  ...props
}) => {
  return (
    <video {...props}>
      <source src={`${gatewayUrl}/${cleanUpHash(hash)}`} />
    </video>
  );
};
