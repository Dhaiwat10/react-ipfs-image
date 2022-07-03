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
