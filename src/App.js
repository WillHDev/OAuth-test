
// import './App.css';
import React from 'react'
import {
  Route,
  withRouter,
  BrowserRouter as Routes
} from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './styles/globals.css'
import  LoginPage2 from './pages/LoginPage2';
import Dashboard from './pages/Dashboard';
import AddTask from './pages/AddTask'
import TestPage from './pages/TestPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/Auth-Context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
    currentUser: null
    };
  }

  unSubscribeFromAuth = null;

//TODO fix mongoose and reconnect async call

  // async componentDidMount() {

  //   // GET request using fetch with async/await
  //   const response = await fetch('http://localhost:8080/api/resources');
  //   const data = await response.json();
  //   this.setState({ resources: data });

  // }
 resources = [
    {
        id: "1",
        title: "Learning Singleton Pattern",
        description: "I would like to learn singleton in JS language because it's important for my job",
        link: "https://link.com",
        proiority: 3,
        timeToFinish: 120,
        status: "active",
        creator: "u1",
        assignedTo:"u1"
    },
    {
        id: "2",
        title: "Resouce 2 Description",
      description: "I would like to learn singleton in JS language because it's important for my job",
        link: "https://link.com",
      proiority: 2,
      timeToFinish: 60,
      status: "inactive",
        creator: "u2",
        assignedTo:"u1"
    },
    {
        id: "3",
        title: "Resource 3 Description",
        description: "I would like to learn singleton in JS language because it's important for my job",
        link: "https://link.com",
        proiority: 1,
        timeToFinish: 30,
        status: "inactive",
        creator: "u2",
        assignedTo:"u2"
    }
]

  
  // componentWillUnmount() {
  //   this.unSubscribeFromAuth();
  // }
//
  render() {
  
    return (
      <div className="App">
        <AuthProvider>
            <Routes>
            <Route exact path="/" >
              <Dashboard />
              </Route>

              <Route exact path="/auth" >
                <Container className="d-flex align-items-center
                justify-content-center" 
                style={{ minHeight: "100vh" }}>
                  <div className="w-100"
                  style={{  maxWidth: "400px" 
                }}>
                <LoginPage2 />
                </div>
                </Container>
        
              </Route>
              <Route exact path="/tasks/new" >
              <AddTask />
              </Route>
              <Route exact path="/test" >
              <TestPage />
              </Route>
            </Routes>
       
            </AuthProvider>
    </div>
    );
  }
}


export default withRouter(App);

