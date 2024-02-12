import React from 'react';
import {
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonPage,
  IonRouterLink,
  IonNavLink,
  IonNav
} from '@ionic/react';

import { home, globe } from 'ionicons/icons';




import { Route, Redirect } from 'react-router';

import  Home  from '../pages/Home'

const CountryPage: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Country</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {/* Додайте вміст вашої сторінки */}
    </IonContent>
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>General</IonLabel>
        </IonTabButton>

        <IonTabButton tab="country" href="/country">
          <IonIcon icon={globe} />
          <IonLabel>Country</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </>
);

const AppTabs: React.FC = () => (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/country" render={() => <CountryPage />} exact={true} />
        <Redirect exact path="/" to="/home" />
      </IonRouterOutlet>
  
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>General</IonLabel>
        </IonTabButton>
  
        <IonTabButton tab="country" href="/country">
          <IonIcon icon={globe} />
          <IonLabel>Country</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );

export default CountryPage;
