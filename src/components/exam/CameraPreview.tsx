import React, { useEffect, useRef } from 'react';
import { useDraggable } from '@/hooks/useDraggable';
import { Video, VideoOff, Move } from 'lucide-react';

interface CameraPreviewProps {
  stream: MediaStream | null;
}

export const CameraPreview: React.FC<CameraPreviewProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { position, isDragging, dragRef, handleMouseDown, handleTouchStart } = useDraggable({ 
    x: window.innerWidth - 176, 
    y: window.innerHeight - 136 
  });

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div
      ref={dragRef}
      className="camera-preview"
      style={{
        left: position.x,
        top: position.y,
        width: 160,
        height: 120,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {stream ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <VideoOff className="w-8 h-8 text-muted-foreground" />
        </div>
      )}
      <div className="absolute top-1 right-1 bg-primary/80 rounded-full p-1">
        <Move className="w-3 h-3 text-primary-foreground" />
      </div>
      <div className="absolute bottom-1 left-1 bg-destructive/80 rounded-full w-2 h-2 animate-pulse" />
    </div>
  );
};
