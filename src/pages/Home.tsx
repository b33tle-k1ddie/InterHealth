import React from 'react';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonPage } from '@ionic/react';
import { home, globe } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import CountryPage from '../pages/Country-page';
import "./Home.css";
import { useQuery, ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';
const Tables: React.FC = ()=>{
  const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
      age
    }
  }
`;

const { data, loading, error } = useQuery(GET_ALL_USERS);

if (loading) return <p>Loading...</p>;

if (error) {
  console.error('Error fetching data:', error);
  return <p>Error: {error.message}</p>;
}
console.log(data);
}

const Home: React.FC = () => (
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
          <Link to="/search">
            <IonButton routerDirection="forward">Go to Search Page</IonButton>
          </Link>
        </IonCardContent>
      </IonCard>

      <IonCard color="warning">
        <IonCardHeader>
          <IonCardTitle>TAKE A PICTURE</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonImg src="../src/assets/media/pic.png" id="card-photo" />
          <Link to="/photo">
            <IonButton routerDirection="forward">Go to Photo Page</IonButton>
          </Link>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
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

const App: React.FC = () => (
  
  <ApolloProvider client={client}>
  <IonReactRouter>
    <Home />
    <AppTabs />
    <Tables />
  </IonReactRouter>
  </ApolloProvider>
);
const client = new ApolloClient({
  uri: 'http://172.20.10.5:5000/graphql',
  cache: new InMemoryCache(),
});



export default App;
