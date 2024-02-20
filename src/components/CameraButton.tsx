// CameraButton.tsx
import React from 'react';
import { IonButton } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

interface CameraButtonProps {
  onPhotoTaken: (text: string) => void;
}

const CameraButton: React.FC<CameraButtonProps> = ({ onPhotoTaken }) => {
  const openCamera = async () => {
    try {
      const cameraPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        source: CameraSource.Camera,
        resultType: CameraResultType.Base64,
      });

      if (cameraPhoto.base64String) {
        const response = await fetch('http://192.168.103.47:5000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              mutation RecognizeText($image: String!) {
                recognizeText(image: $image)
              }
            `,
            variables: {
              image: cameraPhoto.base64String,
            },
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Результат розпізнавання тексту:', result.data.recognizeText);
          onPhotoTaken(result.data.recognizeText);
        } else {
          console.error('Помилка при виклику серверного API');
        }
      }
    } catch (error) {
      console.error('Помилка при відкритті камери:', error);
    }
  };

  return <IonButton onClick={openCamera}>Take a Photo</IonButton>;
};

export default CameraButton;
