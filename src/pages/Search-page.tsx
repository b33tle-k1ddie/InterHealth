// SearchPage.tsx
import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton, IonInput, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonImg } from '@ionic/react';
import './SearchPage.css';
import { search } from 'ionicons/icons';
import { fetchTablet } from '../components/API'
const GetDB: React.FC = () => {
  const Tablet = document.getElementById('tablet').value;
  console.log(Tablet);
  const CheckInput = async () => {
    if (Tablet === '') {
      alert("Enter your tablet");
    } else {
      const tab = { key: 'key3', value: Tablet };
      window.localStorage.setItem(tab.key, tab.value);
      await fetchTablet();
    }
  }
  CheckInput();
  return <SearchPage />

}

const SearchPage: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle><IonIcon src="../src/assets/media/logo.svg" id="icon" /></IonTitle>
      </IonToolbar>
    </IonHeader>
    

    <IonContent className="ion" scrollY={true}>
    <IonCard color="success">
      <IonCardHeader>
        <IonCardTitle><IonIcon icon={search} />  Search medicine</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>

        <IonInput id="tablet" label="" placeholder="Enter name of medicine"></IonInput>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            marginTop: '10px',
          }}>
          <IonButton onClick={GetDB} >Search</IonButton>

        </div>

      </IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Loratadine</IonCardTitle>
        <IonCardSubtitle>Syrup</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>5mg/5ml</IonCardContent>
    </IonCard>
     {/* Далі йде та сама хуйня */}
     <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ibuprofen</IonCardTitle>
        <IonCardSubtitle>Capsule</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>200mg</IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Aspirin</IonCardTitle>
        <IonCardSubtitle>tablet</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>10ml</IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Amoxicillin</IonCardTitle>
        <IonCardSubtitle>Oral Suspension</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>250mg/5ml</IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Cetirizine</IonCardTitle>
        <IonCardSubtitle>Chewable Tablet</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>10mg</IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Xylometazoline</IonCardTitle>
        <IonCardSubtitle>spray</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>10ml</IonCardContent>
    </IonCard>
    <IonToolbar>
          <IonImg src="../src/assets/media/banner.png" id="" />
        </IonToolbar>
    </IonContent>
    
  </>
);

export default SearchPage;
