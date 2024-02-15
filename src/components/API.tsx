import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://192.168.0.105:5000/graphql', // пристрій на якому піднятий аполо
  }),
  cache: new InMemoryCache(),
});
export const fetchTablet = async ()=>{
  const key = 'key3';
  const tablet = window.localStorage.getItem(key);
  const GET_ALL_USERS = gql`
      query {
        get{
          key
          generic
          local
        }
      }
    `;
    try {
      const { data } = await client.query({
        query: GET_ALL_USERS
      });
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
 }

export const fetchData = async () => {
    const key1 = 'Key1';
    const key2 = 'Key2';
    
    if (window.localStorage.getItem(key1) !== undefined && window.localStorage.getItem(key2) !== undefined) {
      console.log(`${window.localStorage.getItem(key1)}`);
      console.log(`${window.localStorage.getItem(key2)}`);
      const GET_ALL_USERS = gql`
      query($generic: String!, $local: String!) {
        take(generic: $generic, local: $local) {
          key
          generic
          local
        }
      }
    `;
    
    try {
      const { data } = await client.query({
        query: GET_ALL_USERS,
        variables: {
          generic: window.localStorage.getItem(key1),
          local: window.localStorage.getItem(key2),
        },
      });
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    }
  };
  
  export default  fetchData ;