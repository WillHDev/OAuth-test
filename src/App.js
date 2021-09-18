
// import './App.css';
import 'bulma/css/bulma.min.css';
import './styles/globals.css'
import Layout from './components/Layout'
import ResourceHighlight from './components/ResourceHighlight'
import ResourceList from './components/ResourceList'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'


function App() {
  return (
   
    <div className="App">
       
      <header className="App-header">
      <>
        <Layout>
        {/* <ResourceHighlight
        
        />   */}
        <NewsLetter />
        {/* <ResourceList 
         
        /> */}
        <Footer />
        </Layout>
     </>
      </header>
      
    </div>
   
  );
}

export default App;
// resources={resources.slice(2)}
// resources={resources.slice(0,2)}