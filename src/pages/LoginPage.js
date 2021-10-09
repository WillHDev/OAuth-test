import React, {useState} from 'react';


import { useLocation } from 'react-router-dom'




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
  const LoginPage = () => { 
const [ allValues, setAllValues ] = useState(
  {

    email: '',

    password: ''

  }
)


const changeHandler = e => {
  setAllValues({...allValues, [e.target.name]: e.target.value})
}

 const handleSubmit = event => {

    event.preventDefault();



    setAllValues({ email: '', password: '' });

  };



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