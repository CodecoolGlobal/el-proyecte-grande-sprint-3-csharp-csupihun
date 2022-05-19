import React from 'react'

const Test = (event) => {
    event.preventDefault();
}

function Login(props) {
    const openRegistration = () => {
        props.stateChange()
        props.registerButton()
    } 
    return (
        <div className='modal-backdrop' onClick={props.stateChange}>
        <div className={props.state? 'modal show' : 'modal hide'}>
          <div className='modal-content' onClick={e => {
              e.stopPropagation();
            }}>
          <div className='xbutton' onClick={props.stateChange}>x</div> 
          <h1 className='login-header'>SIGN IN TO TI&ER</h1>   
          <form action='login' onSubmit={Test}>
            <div className="input-block">
              <label htmlFor="email">EMAIL: </label><br />
              <input type="text" name="email"/><br />
            </div>
            <div className="input-block">
              <label htmlFor="password">PASSWORD: </label><br />
              <input type="text" name="password"/><br />
            </div>
            <a className='password-recovery' href='/recoverpassword'>Forgot Password?</a><br />
              <button className='login-button' type='submit' onClick={props.stateChange}>LOGIN</button><br />
            <p className='signup' >New to Ti&er? <button className='signup-button' onClick={openRegistration} >SIGN UP</button></p>
          </form>
          </div>
        </div>
        </div>
    )
}

export default Login