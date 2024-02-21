import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';



  export const Join_r = async()=>{
    const fkey = window.localStorage.getItem('room');
    console.log('1111111'+fkey);
    const Host=  'http://192.168.103.'+fkey+':5007/graphql';
    console.log(Host);
    const client = new ApolloClient({
    link: createHttpLink({

      uri:Host, // пристрій на якому піднятий аполо
    }),
    cache: new InMemoryCache(),
    });
    const r =  async()=>{
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
    
    r();

  }
