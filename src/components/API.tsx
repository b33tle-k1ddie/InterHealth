import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:5000/graphql', 
  }),
  cache: new InMemoryCache(),
});

export const fetchData = async () => {
    const key = 'Key';
    console.log('1');
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