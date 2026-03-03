'use client';

import { useState } from 'react';
import Image from 'next/image';

const FALLBACK_IMAGE = '/images/fallback-product.svg';

export default function SmartImage({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(src || FALLBACK_IMAGE);

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={() => setImageSrc(FALLBACK_IMAGE)}
    />
  );
}
