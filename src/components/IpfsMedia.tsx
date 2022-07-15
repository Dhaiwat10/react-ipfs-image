import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { IIpfsVideoProps, IpfsVideo } from './IpfsVideo';
import { IIpfsImageProps, IpfsImage } from './IpfsImage';

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
