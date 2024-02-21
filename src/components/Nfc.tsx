import React, { useEffect } from 'react';
import { Plugins } from '@capacitor/core';

const { Nfc } = Plugins;

const NfcComponent: React.FC = () => {
  useEffect(() => {
    // Визначення події для NFC
    const nfcListener = Nfc.addListener('NfcReading', (event: any) => {
      const message = event.data; // Отримати дані з події
      console.log('Отримано дані через NFC:', message);
      // Обробка отриманих даних
    });

    // Запуск служб NFC
    Nfc.start();

    // Зупинка слухача NFC при виході з компоненту
    return () => {
      nfcListener.remove();
      Nfc.stop();
    };
  }, []);

  return (
    <div>
      <h1>NFC Component</h1>
      {/* Інші елементи або логіка компоненту NFC */}
    </div>
  );
};

export default NfcComponent;
