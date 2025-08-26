// src/components/PixelatedImage.tsx
import React, { useState, useRef, useEffect, FC, MouseEventHandler } from 'react';

interface PixelatedImageProps {
  src: string;
  alt: string;
  pixelSize?: number;
  animationSpeed?: number;
  className?: string;
}

const PixelatedImage: FC<PixelatedImageProps> = ({
  src,
  alt,
  pixelSize = 20,
  animationSpeed = 0.8,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const currentPixelSize = useRef<number>(pixelSize);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;

    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovering) {
        currentPixelSize.current = Math.max(1, currentPixelSize.current - animationSpeed);
      } else {
        currentPixelSize.current = Math.min(pixelSize, currentPixelSize.current + animationSpeed);
      }

      if (image.complete && currentPixelSize.current > 0) {
        const w = image.width / currentPixelSize.current;
        const h = image.height / currentPixelSize.current;

        ctx.drawImage(image, 0, 0, w, h);
        ctx.drawImage(canvas, 0, 0, w, h, 0, 0, image.width, image.height);
      }

      if ((isHovering && currentPixelSize.current > 1) || (!isHovering && currentPixelSize.current < pixelSize)) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    const handleImageLoad = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      animate();
    };

    image.onload = handleImageLoad;

    // In case the image is already loaded
    if (image.complete) {
      handleImageLoad();
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isHovering, pixelSize, animationSpeed]);

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => setIsHovering(true);
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => setIsHovering(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block w-full h-full ${className}`}
      style={{ 
        display: 'inline-block', 
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ 
          width: '100%', 
          height: '100%',
          borderRadius: 'inherit'
        }}
      />
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default PixelatedImage;
