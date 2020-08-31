import React from 'react';
import { ApolloProvider,ApolloClient,InMemoryCache  ,HttpLink } from '@apollo/client'

//components
import BookList from './components/BookList';
import AddBook from './components/addBooks';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Tegar Reading List</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
