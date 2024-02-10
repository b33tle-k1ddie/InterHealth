import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);

  const takePicture = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      setPhotoDataUrl(image.dataUrl);
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  };

  const test = async () => {
    try {
      // Отримати елемент за id
      const element = document.getElementById('asd');

      // Перевірити, чи елемент існує
      if (element) {
        // Виклик GraphQL-мутації для передачі тексту
        const axios = require('axios'); // Імпорт axios тут
        const response = await axios.post('http://172.20.10.5:4000/graphql');

        const textFromGraphQL = response.data.data.setText;

        // Змінити вміст елемента
        element.textContent = textFromGraphQL;
      } else {
        console.error('Елемент з id asd не знайдено');
      }
    } catch (error) {
      console.error('Помилка під час вставки тексту:', error);
    }
  };

  return (
    <IonPage>
      <IonContent>
        {photoDataUrl ? (
          <img src={photoDataUrl} alt="Captured Photo" style={{ maxWidth: '100%' }} />
        ) : (
          <>
            <div id="container">
              <strong id="asd"></strong>
              <IonText>Hello, World!</IonText>
              <IonButton onClick={takePicture}>Зробити фото</IonButton>
              <IonButton onClick={test}>Тест</IonButton>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
