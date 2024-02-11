// Home.tsx
import React from 'react';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>InterHealth</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h1>InterHealth App by DPSU_IT_HUB</h1>
      <Link to="/search">
        <IonButton routerDirection="forward">Go to Search Page</IonButton>
      </Link>
      <Link to="/photo">
        <IonButton routerDirection="forward">Go to Photo Page</IonButton>
      </Link>
    </IonContent>
  </>
);

export default Home;
