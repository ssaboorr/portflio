// src/components/PixelatedImage.js
import React, { useState, useRef, useEffect } from 'react';

const PixelatedImage = ({ src, alt, pixelSize = 20, animationSpeed = 0.8 }) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const currentPixelSize = useRef(pixelSize);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = imageRef.current;

    const animate = () => {
      // Clear the canvas for the next frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovering) {
        // Decrease pixel size towards the original image
        currentPixelSize.current = Math.max(1, currentPixelSize.current - animationSpeed);
      } else {
        // Increase pixel size to the target pixelation
        currentPixelSize.current = Math.min(pixelSize, currentPixelSize.current + animationSpeed);
      }

      // Draw the image with the current pixelation level
      if (image.complete && currentPixelSize.current > 0) {
        const w = image.width / currentPixelSize.current;
        const h = image.height / currentPixelSize.current;

        // Draw a scaled-down version of the image
        ctx.drawImage(image, 0, 0, w, h);
        
        // Stretch the scaled-down version back to full size
        ctx.drawImage(canvas, 0, 0, w, h, 0, 0, image.width, image.height);
      }

      // Continue the animation loop if needed
      if (currentPixelSize.current > 1 && isHovering) {
        requestAnimationFrame(animate);
      } else if (currentPixelSize.current < pixelSize && !isHovering) {
        requestAnimationFrame(animate);
      }
    };

    // Load the image and start the animation
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      animate();
    };
    
    // Start animation loop on mount
    animate();
  }, [isHovering, pixelSize, animationSpeed]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      <canvas ref={canvasRef} />
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ display: 'none' }} // Hide the original image
      />
    </div>
  );
};

export default PixelatedImage;
