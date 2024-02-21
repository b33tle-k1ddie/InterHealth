import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import {GetIp} from '../components/API';


  export const Join_r = async()=>{
    await GetIp();
    const ip = window.localStorage.getItem('IpRoom');
    const fkey = window.localStorage.getItem('KeyRoom');
    const Host=  `http://${ip}.${fkey}:5007/graphql`;
    console.log(Host);
    const client = new ApolloClient({
    link: createHttpLink({

      uri:Host, 
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
  export const GetMessage = async()=>{
    await GetIp();
    const ip = window.localStorage.getItem('IpRoom');
    const fkey = window.localStorage.getItem('KeyRoom');
    const Host=  `http://${ip}.${fkey}:5007/graphql`;
    console.log(Host);
    const client = new ApolloClient({
    link: createHttpLink({

      uri:Host, 
    }),
    cache: new InMemoryCache(),
    });
    const r =  async()=>{
      const GET_ALL_USERS = gql`
      query {
        message{
          county
          message
        }
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

  export const SaveMessage = async(sender: string, content: string)=>{
    await GetIp();
    const ip = window.localStorage.getItem('IpRoom');
    const fkey = window.localStorage.getItem('KeyRoom');
    const Host=  `http://${ip}.${fkey}:5007/graphql`;
    console.log(Host);
    const client = new ApolloClient({
    link: createHttpLink({

      uri:Host, 
    }),
    cache: new InMemoryCache(),
    });
    window.localStorage.setItem('msg', content);
    window.localStorage.setItem('snd', sender);
    
    const r =  async()=>{
      const GET_ALL_USERS = gql`
      mutation ($sender: String!, $content: String!) {
        save(sender: $sender, content: $content)
      }
    `;
   
    try {
      const { data } = await client.mutate({
        mutation: GET_ALL_USERS,
        variables: {
          sender: sender,
          content: content,
        },
      });
      console.log(`AAA${data}`);
      // обробка даних
    } catch (error) {
      console.error("Mutation error:", error);
    }
    
    }
    r();};