import React, { useState } from 'react';
import { Camera, Mic, Shield, AlertTriangle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PermissionsCheckProps {
  onPermissionsGranted: (stream: MediaStream) => void;
  attemptsRemaining?: number;
  maxAttempts?: number;
}

export const PermissionsCheck: React.FC<PermissionsCheckProps> = ({ 
  onPermissionsGranted,
  attemptsRemaining = 3,
  maxAttempts = 3
}) => {
  const [cameraStatus, setCameraStatus] = useState<'pending' | 'granted' | 'denied'>('pending');
  const [micStatus, setMicStatus] = useState<'pending' | 'granted' | 'denied'>('pending');
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestPermissions = async () => {
    setIsChecking(true);
    setError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setCameraStatus('granted');
      setMicStatus('granted');
      
      setTimeout(() => {
        onPermissionsGranted(stream);
      }, 500);
    } catch (err) {
      console.error('Permission error:', err);
      
      if (err instanceof DOMException) {
        if (err.name === 'NotAllowedError') {
          setError('Camera and microphone access denied. Please enable them in your browser settings.');
          setCameraStatus('denied');
          setMicStatus('denied');
        } else if (err.name === 'NotFoundError') {
          setError('Camera or microphone not found. Please check your devices.');
        } else {
          setError('An error occurred while accessing camera/microphone.');
        }
      }
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-lg glass-panel animate-fade-in">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            Exam Proctoring Setup
            <span className="block text-lg text-muted-foreground mt-1">परीक्षा प्रॉक्टरिंग सेटअप</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Attempts remaining today: <span className="font-bold text-primary">{attemptsRemaining}/{maxAttempts}</span>
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
              <Camera className={`w-6 h-6 ${
                cameraStatus === 'granted' ? 'text-success' : 
                cameraStatus === 'denied' ? 'text-destructive' : 'text-muted-foreground'
              }`} />
              <div className="flex-1">
                <p className="font-medium">Camera / कैमरा</p>
                <p className="text-sm text-muted-foreground">
                  {cameraStatus === 'granted' ? 'Access granted ✓' : 
                   cameraStatus === 'denied' ? 'Access denied ✗' : 'Permission required'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
              <Mic className={`w-6 h-6 ${
                micStatus === 'granted' ? 'text-success' : 
                micStatus === 'denied' ? 'text-destructive' : 'text-muted-foreground'
              }`} />
              <div className="flex-1">
                <p className="font-medium">Microphone / माइक्रोफोन</p>
                <p className="text-sm text-muted-foreground">
                  {micStatus === 'granted' ? 'Access granted ✓' : 
                   micStatus === 'denied' ? 'Access denied ✗' : 'Permission required'}
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 text-destructive">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Exam Rules / परीक्षा नियम:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Do not switch tabs or minimize the browser</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Stay in fullscreen mode throughout the exam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>3 violations will auto-submit your exam</span>
              </li>
            </ul>
          </div>

          <Button
            onClick={requestPermissions}
            disabled={isChecking}
            className="w-full gap-2"
            size="lg"
          >
            {isChecking ? (
              <>Checking Permissions...</>
            ) : cameraStatus === 'granted' && micStatus === 'granted' ? (
              <>
                <Play className="w-5 h-5" />
                Start Exam / परीक्षा शुरू करें
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                Grant Permissions / अनुमति दें
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
