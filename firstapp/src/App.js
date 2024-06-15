import './index.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Content color="lightblue"/>
      <Footer/>
    </div>
  );
}

export default App;
