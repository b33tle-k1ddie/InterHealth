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

import { Link } from 'react-router-dom';



import { Route, Redirect } from 'react-router';

import CountryPage from '../pages/Country-page';

import CameraButton from '../components/CameraButton'; 

import "./Home.css";
import { useQuery, ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

const Tables: React.FC = () => {
  const GET_ALL_USERS = gql`
  query{
      get
    }
  `;

  const { data, loading, error } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;

  if (error) {
    console.error('Error fetching data:', error);
    return <p>Error: {error.message}</p>;
  }

  console.log(data);
  return <p>Data loaded...</p>;
};



const Home: React.FC = () => {
 
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonImg src="../src/assets/media/banner.png" id="" />
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard color="success">
          <IonCardHeader>
            <IonCardTitle>FIND DRUGS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg src="../src/assets/media/med.png" id="card-photo" />
            <IonRouterLink routerLink="/search" routerDirection="forward">
              <IonButton>Go to Page</IonButton>
            </IonRouterLink>
          </IonCardContent>
        </IonCard>

        <IonCard color="warning">
          <IonCardHeader>
            <IonCardTitle>TAKE A PICTURE</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonImg src="../src/assets/media/pic.png" id="card-photo" />
            <CameraButton onPhotoTaken={handlePhotoTaken} />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
};


const AppTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/home" component={Home} exact={true} />
      <Route path="/country" component={CountryPage} exact={true} />
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

const client = new ApolloClient({
  uri: 'http://172.20.10.5:5000/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Tables/>
    <IonRouterOutlet>
    <Route path="/" component={AppTabs} />
    </IonRouterOutlet>
  </ApolloProvider>
)

const handlePhotoTaken = (base64String: string | undefined) => {
  // Обробляємо отримане фото
  if (base64String) {
    // Ваш код для обробки фото
    console.log('Фото успішно отримано:', base64String);
  } else {
    // Обробка ситуації, коли фото не було зроблено
    console.log('Фото не було зроблено');
  }
}
;


export default App;
