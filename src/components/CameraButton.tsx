import React, { useState } from 'react';
import { IonButton, IonLoading, IonAlert } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import NfcComponent from './Nfc';
interface CameraButtonProps {
  onPhotoTaken: (text: string) => void;
}

const CameraButton: React.FC<CameraButtonProps> = ({ onPhotoTaken }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const openCamera = async () => {
    setShowAlert(true);
  };

  const handleAlertChoice = async (choice: string) => {
    setShowAlert(false);

    if (choice === 'TCCC') {
      try {
        setLoading(true);

        const cameraPhoto = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          source: CameraSource.Camera,
          resultType: CameraResultType.Base64,
        });

        if (cameraPhoto.base64String) {
          // Обробка фотографії для 'TCCC'
          console.log('Обробка фотографії для TCCC');
        }
      } catch (error) {
        console.error('Помилка при відкритті камери:', error);
      } finally {
        setLoading(false);
      }
    } else if (choice === 'Package') {
      try {
        setLoading(true);

        const cameraPhoto = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          source: CameraSource.Camera,
          resultType: CameraResultType.Base64,
        });

        if (cameraPhoto.base64String) {
          const recognizedText = await recognizeTextForPackage(cameraPhoto.base64String);
          console.log('Результат розпізнавання тексту для Package:', recognizedText);
          onPhotoTaken(recognizedText);
        }
      } catch (error) {
        console.error('Помилка при відкритті камери:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const recognizeTextForPackage = async (base64Image: string): Promise<string> => {
    try {
      const response = await fetch('http://10.202.249.200:5000/graphql', {
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
            image: base64Image,
          },
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Результат розпізнавання тексту для Package:', result.data.recognizeText);
        return result.data.recognizeText;
      } else {
        console.error('Помилка при виклику серверного API для Package');
        return 'Помилка при розпізнаванні тексту для Package';
      }
    } catch (error) {
      console.error('Помилка при розпізнаванні тексту для Package:', error);
      return 'Помилка при розпізнаванні тексту для Package';
    }
  };

  return (
    <>
      <IonButton onClick={openCamera}>Take a Photo</IonButton>
      <IonLoading isOpen={loading} message="Capturing photo..." />

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Choose Option"
        buttons={[
          {
            text: 'TCCC',
            handler: () => handleAlertChoice('TCCC'),
          },
          {
            text: 'Package',
            handler: () => handleAlertChoice('Package'),
          },
        ]}
      />
    </>
  );
};

export default CameraButton;
