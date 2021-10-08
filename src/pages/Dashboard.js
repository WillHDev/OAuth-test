
// import './Dashboard.css';
import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.min.css';
import '../styles/globals.css'
import Layout from '../components/Layout'
import ResourceHighlight from '../components/ResourceHighlight'
import ResourceList from '../components/ResourceList'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'



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



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: []
    };
  }


  async componentDidMount() {

    // GET request using fetch with async/await
    const response = await fetch('http://localhost:8080/api/resources');
    const data = await response.json();
    this.setState({ resources: data });
  }
  
  

//
  render() {
    const { resources } = this.state;
    return (
      <div className="Dashboard">
       
      <header className="Dashboard-header">
        <Layout>
         <ResourceHighlight 
            resources={resources.slice(2)}
       />   
         <NewsLetter /> 
        <ResourceList 
            resources={resources.slice(0,2)}
        /> 
        <Footer />
        </Layout>
      </header>
      
    </div>
    );
  }
}





export default Dashboard;

