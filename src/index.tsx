import React, { FC, HTMLAttributes, useEffect, useState } from 'react';

const DEFAULT_IPFS_GATEWAY_URL = 'https://ipfs.infura.io/ipfs';

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
  gatewayUrl = DEFAULT_IPFS_GATEWAY_URL,
  ...props
}) => {
  return <img src={`${gatewayUrl}/${cleanUpHash(hash)}`} {...props} />;
};

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

export type IIpfsMediaProps = IIpfsVideoProps & IIpfsImageProps;

export const IpfsMedia: FC<IIpfsMediaProps> = ({
  hash,
  gatewayUrl,
  autoPlay = true,
  muted = true,
  controls = true,
  loop = true,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);
  const [vidError, setVidError] = useState(false);

  useEffect(() => {
    setImgError(false);
    setVidError(false);
  }, [hash]);

  return (
    <>
      {!imgError && (
        <IpfsImage hash={hash} onError={() => setImgError(true)} {...props} />
      )}
      {!vidError && (
        <IpfsVideo
          hash={hash}
          onError={() => setVidError(true)}
          autoPlay={autoPlay}
          muted={muted}
          controls={controls}
          loop={loop}
          {...props}
        />
      )}
    </>
  );
};

export const getImgUriFromTokenUriHash = async (
  tokenUriHash: string,
  ipfsGatewayUrl = DEFAULT_IPFS_GATEWAY_URL
) => {
  const ipfsHash = cleanUpHash(tokenUriHash);
  const ipfsUrl = `${ipfsGatewayUrl}/${ipfsHash}`;
  const res = await (await fetch(ipfsUrl)).json();
  return res.image as string;
};

export const useImgUris = (tokenUriHashes: string[]) => {
  const [imgURIs, setImgURIs] = useState<string[]>([]);

  useEffect(() => {
    const fetchImgUris = async () => {
      const imgUris = await Promise.all(
        tokenUriHashes.map(uriHash => getImgUriFromTokenUriHash(uriHash))
      );
      setImgURIs(imgUris);
    };
    fetchImgUris();
  }, [tokenUriHashes]);

  return imgURIs;
};
