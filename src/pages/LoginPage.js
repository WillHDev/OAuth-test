import React, {useState} from 'react';


//import { useLocation } from 'react-router-dom'

import { useHistory,
useEffect, useLocation,
Redirect } from 'react-router-dom'


import FormInput from '../shared/components/FormElements/FormInput';

import Button from '../shared/components/FormElements/Button';

import { signInWithGoogle } from '../firebase/firebase.utils'

//import './Sign-In.styles.scss';



 //class LoginPage extends React.Component {

  // constructor(props) {

  //   super(props);



  //   this.state = {

  //     email: '',

  //     password: ''

  //   };

  // }
  const LoginPage = (props) => { 
const [ allValues, SetAllValues ] = useState(
  {

    email: '',

    password: ''

  }
)
const [isLoggedIn, setIsLoggedIn] = useState(false);

const changeHandler = e => {
  SetAllValues({...allValues, [e.target.name]: e.target.value})
}


//const navigate = useNavigate();
// const { login } = useAuth();
//const { state } = useLocation();
 const handleSubmit = event => {

    event.preventDefault();
//TODO:add conditional to RD to auth if not logged in


    SetAllValues({ email: '', password: '' });
  
    //const history = useHistory();
    //   let history= useHistory();
    //  history.push("/" );
    setIsLoggedIn(true);
 }
 if (isLoggedIn) {
  return <Redirect to='/' />
 }
  // const handleLogin = () => {
  //   login().then(() => {
  //     navigate(state.path || "/dashboard");
  //   });
  // };


  // handleChange = event => {

  //   const { value, name } = event.target;



  //   this.setState({ [name]: value });

  // };

//    navigate = useNavigate();
// login  = useAuth().login;
//   state  = useLocation().state;
  
//     handleSignin = () => {
//       login().then(() => {
//         navigate(state.path || "/");
//       });
//     };
  





//onSubmit={handleSubmit}

  // render() {

    return (

      <div className='sign-in'>

        <h2>I already have an account</h2>

        <span>Sign in with your email and password</span>



        <form onSubmit={handleSubmit}>

          <FormInput  

            name='email'

            type='email'

            handleChange={changeHandler}

            value={allValues.email}

            label='email'

            required

          />

          <FormInput

            name='password'

            type='password'

            value={allValues.password}

            handleChange={changeHandler}

            label='password'

            required

          />

          <Button type='submit'> Sign in </Button>
          <Button onClick={() => {
            signInWithGoogle();
           
           }} 
           isGoogleSignIn> Sign in with Google </Button>
        </form>

      </div>

    );

  }

//}



export default LoginPage;


// export default LoginPage;

//TODO: add inverse etc to button