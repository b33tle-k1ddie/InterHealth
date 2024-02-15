// CameraButton.tsx
import React, { useState } from 'react';
import { IonButton, IonLoading } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { CameraSource, CameraResultType, CameraPhoto } from '@capacitor/camera';
import { analyzeHandwrittenText, HandwrittenTextResult } from './AzureComputerVision';
import { text } from 'ionicons/icons';

interface CameraButtonProps {
  onPhotoTaken: (base64String: string | undefined, extractedText: string | undefined) => void;
}

const CameraButton: React.FC<CameraButtonProps> = ({ onPhotoTaken }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const openCamera = async () => {
    try {
      setLoading(true);
      const cameraPhotoResult = await getCameraPhoto();
      const base64String: string = convertToBase64(cameraPhotoResult);

      const result: HandwrittenTextResult = await analyzeHandwrittenText(base64String);
      console.log('Extracted Handwritten Text:', result.extractedText);
      
      var len = result.extractedText.length;
      var text = '';
      for (var _i = 0; _i < len; _i++) {
        text += result.extractedText[_i].text;
        text += ' ';
      }
      
      console.log(text);
      onPhotoTaken(base64String, result.extractedText);
    } catch (error) {
      console.error('Error capturing or analyzing photo:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCameraPhoto = async () => {
    const { Camera } = Plugins;
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64,
    });
  };

  const convertToBase64 = (photo: CameraPhoto | undefined): string => {
    return photo?.base64String || '';
  };

  return (
    <>
      <IonButton onClick={openCamera}>Take a Photo</IonButton>
      <IonLoading isOpen={loading} message="Capturing photo..." />
    </>
  );
};

export default CameraButton;
