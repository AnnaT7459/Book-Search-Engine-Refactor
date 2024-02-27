// module 21 activity 11
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

// import Header from './components/Header';
// import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path = '/' element {<SearchBooks />} />
        </Routes>
        <Routes>
          <Route path = '/' element {<SavedBooks />} />
        </Routes>
          <Outlet />
    </ApolloProvider>
  );
}

export default App;
