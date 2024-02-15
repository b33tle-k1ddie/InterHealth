import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:5000/graphql', 
  }),
  cache: new InMemoryCache(),
});

export const fetchData = async () => {
    const key = 'Key';

    if (window.localStorage.getItem(key) == '2') {
      console.log(`${window.localStorage.getItem(key)}`);
      const GET_ALL_USERS = gql`
        query {
          get(id: 2) {
            id
            name
            type
          }
          take( ${window.localStorage.getItem(key)}) {
            key
            value
            
          }
        }
      `;
  
      try {
       
        const { data } = await client.query({
          query: GET_ALL_USERS,
        });
        console.log(data);
    
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };
  
  export default  fetchData ;