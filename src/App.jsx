

import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      
      <Navbar/>
      <ItemListContainer greeting ={"No hemos encontrados productos"}/>

      <Footer/>
    </div>
  );
}

export default App;
