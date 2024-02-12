// CameraButton.tsx
import React from 'react';
import { IonButton } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { CameraSource, CameraResultType, CameraPhoto } from '@capacitor/camera';

interface CameraButtonProps {
  onPhotoTaken: (base64String: string | undefined) => void;
}

const CameraButton: React.FC<CameraButtonProps> = ({ onPhotoTaken }) => {
  const openCamera = async () => {
    const { Camera } = Plugins;
    const cameraPhoto: CameraPhoto | undefined = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64,
    });

    // Convert the base64String to the correct format if needed
    const base64String = cameraPhoto?.base64String;

    // передаємо отримане фото до батьківського компонента
    onPhotoTaken(base64String);
  };

  return (
    <IonButton onClick={openCamera}>Take a Photo</IonButton>
  );
};

export default CameraButton;