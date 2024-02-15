import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://192.168.0.105:5000/graphql', // пристрій на якому піднятий аполо
  }),
  cache: new InMemoryCache(),
});

export const fetchData = async () => {
    const key = 'Key';
    
    if (window.localStorage.getItem(key) != undefined) {
      console.log(`${window.localStorage.getItem(key)}`);
      const GET_ALL_USERS = gql`
        query( $value: String!) {
          
          take(value: $value) {
            key
            value
            
          }
        }
      `;
  
      try {
       
        const { data } = await client.query({
          query: GET_ALL_USERS,
          variables: {
           
            value: window.localStorage.getItem(key),
          }
        });
        console.log(data);
    
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };
  
  export default  fetchData ;