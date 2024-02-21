// NfcComponent.tsx

import React, { useEffect, useState } from 'react';
import { Plugins } from '@capacitor/core';

const { Nfc } = Plugins;

interface NfcComponentProps {
  onNfcDataReceived: (data: string) => void;
}

const NfcComponent: React.FC<NfcComponentProps> = ({ onNfcDataReceived }) => {
  const [photoData, setPhotoData] = useState<string | null>(null);

  useEffect(() => {
    const nfcListener = Nfc.addListener('NfcReading', (event: any) => {
      const message = event.data;
      console.log('Отримано дані через NFC:', message);

      if (message) {
        setPhotoData(message);
        onNfcDataReceived(message);
      }
    });

    Nfc.start();

    return () => {
      nfcListener.remove();
      Nfc.stop();
    };
  }, [onNfcDataReceived]);

  const openModalWithPhoto = () => {
    // Ваша логіка для відкриття модального вікна з фотографією
    // Тут ви можете використовувати значення photoData
  };

  return (
    <div>
      <h1>NFC Component</h1>
      {photoData && (
        <button onClick={openModalWithPhoto}>Open Modal with Photo</button>
      )}
      {/* Інші елементи або логіка компоненту NFC */}
    </div>
  );
};

export default NfcComponent;
