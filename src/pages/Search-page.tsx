import React, { useState, useEffect } from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton, IonInput, IonCard, IonCardContent } from '@ionic/react';
import { search } from 'ionicons/icons';
import { fetchTablet } from '../components/API';

const SearchPage: React.FC = () => {
  const [res, setRes] = useState<string | null>(null);
  const [tablet, setTablet] = useState<string>('');
  const [form, setForm] = useState<string | null>(null);
  const [actSub, setActSub] = useState<string | null>(null);

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
        console.log(value);
        const formValue = value[1].form;
        const actSubValue = value[1].act_sub;

        setRes(newRes);
        setForm(formValue);
        setActSub(actSubValue);
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
          <div>Original: {tablet}</div>
          <hr style={{ borderTop: '1px solid white' }}/>
            <div>Analogue: {res}</div>
            <div>Form: {form}</div>
            <div>Active Substance: {actSub}</div>
          </IonCardContent>
        </IonCard>

        {/* Інші елементи карти */}
      </IonContent>
    </>
  );
};

export default SearchPage;
