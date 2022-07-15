import React from 'react';
import { HTMLAttributes, FC } from 'react';
import { cleanUpHash, DEFAULT_IPFS_GATEWAY_URL } from '../utils';

export interface IIpfsAudioProps extends HTMLAttributes<HTMLVideoElement> {
  hash: string;
  gatewayUrl?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export const IpfsAudio: FC<IIpfsAudioProps> = ({
  hash,
  gatewayUrl = DEFAULT_IPFS_GATEWAY_URL,
  autoPlay = true,
  muted = false,
  controls = true,
  loop = false,
  ...props
}) => {
  return (
    <audio loop autoPlay muted controls {...props}>
      <source src={`${gatewayUrl}/${cleanUpHash(hash)}`} />
    </audio>
  );
};
