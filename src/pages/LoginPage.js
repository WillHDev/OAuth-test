import React from 'react';



import FormInput from '../shared/components/FormElements/FormInput';

import Button from '../shared/components/FormElements/Button';

import { signInWithGoogle } from '../firebase/firebase.utils'

//import './Sign-In.styles.scss';



 class LoginPage extends React.Component {

  constructor(props) {

    super(props);



    this.state = {

      email: '',

      password: ''

    };

  }



  handleSubmit = event => {

    event.preventDefault();



    this.setState({ email: '', password: '' });

  };



  handleChange = event => {

    const { value, name } = event.target;



    this.setState({ [name]: value });

  };



  render() {

    return (

      <div className='sign-in'>

        <h2>I already have an account</h2>

        <span>Sign in with your email and password</span>



        <form onSubmit={this.handleSubmit}>

          <FormInput  

            name='email'

            type='email'

            handleChange={this.handleChange}

            value={this.state.email}

            label='email'

            required

          />

          <FormInput

            name='password'

            type='password'

            value={this.state.password}

            handleChange={this.handleChange}

            label='password'

            required

          />

          <Button type='submit'> Sign in </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </Button>
        </form>

      </div>

    );

  }

}

export default LoginPage;


// export default LoginPage;

//TODO: add inverse etc to button