import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

const key = 'room';
const fkey = window.localStorage.getItem(key);
console.log(fkey);
const Host=  'http://10.202.249.'+fkey+':5007/graphql';
console.log(Host);
const client = new ApolloClient({
    link: createHttpLink({

      uri:Host, // пристрій на якому піднятий аполо
    }),
    cache: new InMemoryCache(),
  });

  export const Join_r = async()=>{
    const GET_ALL_USERS = gql`
      query {
        test
      }
    `;
    
      const { data } = await client.query({
        query: GET_ALL_USERS
      });
      console.log(data);
      return data;
    

  }
