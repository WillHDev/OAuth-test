
// import './App.css';
import React, { useState, useEffect } from 'react'
import {
  Route,
  withRouter,
  BrowserRouter as Routes
} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './styles/globals.css'
import Layout from './components/Layout'
import ResourceHighlight from './components/ResourceHighlight'
import ResourceList from './components/ResourceList'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import  LoginPage from './pages/LoginPage';
import { auth } from './firebase/firebase.utils';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask'

//

const data2 = [
  {
      id: "1",
      title: "Learning Singleton Pattern",
      description: "I would like to learn singleton in JS language because it's important for my job",
      link: "https://link.com",
      proiority: 3,
      timeToFinish: 120,
    status: "active"
  },
  {
      id: "2",
      title: "Resouce 2 Description",
      description: "I would like to learn singleton in JS language because it's important for my job",
      link: "https://link.com",
      proiority: 2,
      timeToFinish: 60,
    status: "inactive"
  }
];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
    currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  async componentDidMount() {

    // GET request using fetch with async/await
    const response = await fetch('http://localhost:8080/api/resources');
    const data = await response.json();
    //Probably needs to specify
    // console.log(data);
    this.setState({ resources: data });
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });
      console.log(user)
      //
    });
  }
  
  
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
//
  render() {
  
    return (
      <div className="App">
            <Routes>
            <Route exact path="/" >
              <Dashboard />
              </Route>
              <Route exact path="/auth" >
              <LoginPage />
              </Route>
              <Route exact path="/tasks/new" >
              <AddTask />
              </Route>
            </Routes>
       

    </div>
    );
  }
}





export default withRouter(App);


// <BrowserRouter>

// <Switch>
// <Route exact path="/">
//             <App />
//           </Route>
//           <Route  exact path="/auth">
//             <LoginPage />
//           </Route>
//           <Route exact path="/resources/new">
//             <New />
//           </Route>
    
     
         
//         </Switch>
  
//     </BrowserRouter>


// async function fetchResourcesJSON() {
//   const response = await fetch("http://localhost:8080/api/resources");
//   const resources = await response.json();
//   //console.log(resources)
//   return resources;
// }

// function App( ) {
//   const [, setResources, resources] = useState([]);

//   useEffect(() => {
//     // You need to restrict it at some point
//     // This is just dummy code and should be replaced by actual
//       const data = fetchResourcesJSON();
//       return data;
//   }, []);

 
//   //console.log(resources);

  
  
//   return (
   
//     <div className="App">
       
//       <header className="App-header">
//       <>
//         <Layout>
//          <ResourceHighlight 
//           resources={resources}
//          />   
//          {/* <NewsLetter /> 
//          <ResourceList 
         
//         />  */}
//         <Footer />
//         </Layout>
//      </>
//       </header>
      
//     </div>
   
//   );
// }





// // export async function getServerSideProps() {
// //   //write async in front of the function where you would
// //   //like to resolve this data

// //   const resData = await fetch("http://localhost:8080/api/resources");
// //   //********* */
  
// //   const data = await resData.json();
// //   //only appears in terminal
 
// //      return {  props: {
// //        resources: data
// //      }
// //     }
// // }

// export default App;
// // resources={resources.slice(2)}
// // resources={resources.slice(0,2)}