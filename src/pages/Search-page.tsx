import React, { useState, useEffect } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton, IonInput, IonCard, IonCardContent } from '@ionic/react';
import { search } from 'ionicons/icons';
import { fetchTablet } from '../components/API';

const SearchPage: React.FC = () => {
  const [res, setRes] = useState<string | null>(null);
  const [tablet, setTablet] = useState<string>('');

  const CheckInput = async () => {
    if (tablet === '') {
    } else {
      const tab = { key: 'key3', value: tablet };
      window.localStorage.setItem(tab.key, tab.value);
      await fetchTablet();

      const t = window.localStorage.getItem('res');

      setTimeout(() => {
        const value = JSON.parse(t);
        const value1 = window.localStorage.getItem('Key2');
        const newRes = `${value[0]?.['analogue_' + value1]}`;
        setRes(newRes);
      }, 500);
    }
  };

  useEffect(() => {
    CheckInput();
  }, [tablet]);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Search medicine</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion" scrollY={true}>
        <IonCard color="success">
          <IonCardContent>
            <IonInput
              id="tablet"
              placeholder="Enter name of medicine"
              value={tablet}
              onIonChange={(e) => setTablet(e.detail.value!)}
            ></IonInput>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left',
                marginTop: '10px',
              }}
            >
              <IonButton onClick={CheckInput}>Search</IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <div>Analogue: {res}</div>
            <div>Original: {tablet}</div>
          </IonCardContent>
        </IonCard>

        {/* Інші елементи карти */}
      </IonContent>
    </>
  );
};

export default SearchPage;
