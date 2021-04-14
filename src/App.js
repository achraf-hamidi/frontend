// import logo from './logo.svg';
// import './App.css';
import {Container}from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
//import Product from './component/Product'
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <main>
        <Container>
          <Route path ='/' component={HomeScreen} exact/>
          <Route path ='/product/:id' component={ProductScreen} exact/>

          {/* <HomeScreen/> */}
        </Container> 
      </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
