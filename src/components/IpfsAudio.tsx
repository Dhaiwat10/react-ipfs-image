import React, { FC, MediaHTMLAttributes } from 'react';
import { cleanUpHash, DEFAULT_IPFS_GATEWAY_URL } from '../utils';

export interface IIpfsAudioProps extends MediaHTMLAttributes<HTMLVideoElement> {
  hash: string;
  gatewayUrl?: string;
}

export const IpfsAudio: FC<IIpfsAudioProps> = ({
  hash,
  gatewayUrl = DEFAULT_IPFS_GATEWAY_URL,
  ...props
}) => {
  return (
    <audio {...props}>
      <source src={`${gatewayUrl}/${cleanUpHash(hash)}`} />
    </audio>
  );
};
