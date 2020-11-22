import React from 'react'
import HOC from '../../HOC/HOC'
import './Login.css'

const Login = (props) => {

    const styles={
        form:{
            textAlign:'center',
        }
    }

    const handleOnSubmit=(e) =>{
        e.preventDefault();
    }
    return (
        <HOC>
            <section className="section">        <form style={styles.form} onSubmit={(e)=>handleOnSubmit(e)}>
          <h4>Welcome Back!</h4>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='Email'/>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Password'/>
          </div>
          <div className='form-group row'>
            <button className='btn' type='submit'>Log In</button>
          </div>
          <div className='form-group row'>
            <button className='fb btn' type='submit'>Connect with Facebook</button>
          </div>
        </form>
        </section>
        </HOC>
    )
}

export default Login
