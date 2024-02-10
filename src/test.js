import React from 'react';
import { View, Text, Button } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://172.20.10.5:4000/api', // Замініть це на реальну IP-адресу та порт вашого сервера
  cache: new InMemoryCache(),
});

const NEW_NOTE_MUTATION = gql`
  mutation NewNote($content: String!) {
    newNote(content: $content) {
      id
      content
      author
    }
  }
`;

const App = () => {
  const [newNoteMutation] = useMutation(NEW_NOTE_MUTATION);

  const handleButtonPress = async () => {
    try {
      const { data } = await newNoteMutation({
        variables: {
          content: 'ПІЦА',
        },
      });
      console.log('Note created:', data.newNote);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <ApolloProvider client={client}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, World!</Text>
        <Button title="Create Note" onPress={handleButtonPress} />
      </View>
    </ApolloProvider>
  );
};

export default App;