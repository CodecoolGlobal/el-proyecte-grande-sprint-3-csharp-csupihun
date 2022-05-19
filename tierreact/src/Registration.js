import React from 'react'
import Select from 'react-select'

const interestOptions = [
    { value: 'female', label: 'female' },
    { value: 'male', label: 'male' },
    { value: 'any', label: 'any' }
  ]
const sexOptions = [
    { value: 'female', label: 'female' },
    { value: 'male', label: 'male' }
  ]

const Interest = () => (
    <Select name="interest" className='dropdown' placeholder='SELECT INTEREST' options={interestOptions} />
)
const Sex = () => (
    <Select name="sex" className='dropdown' placeholder='SELECT SEX' options={sexOptions} />
)

const Test = (event) => {
    event.preventDefault();
}

function Registration(props) {
  const openLogin = () => {
    props.stateChange()
    props.loginButton()
} 
  return (
    <div className='modal-backdrop' onClick={props.stateChange}>
    <div className={props.state? 'modal show' : 'modal hide'}>
      <div className='modal-content' onClick={e => {
          e.stopPropagation();
        }}>
      <div className='xbutton' onClick={props.stateChange}>x</div> 
      <h1 className='register-header'>GET STARTED</h1>   
      <form action='register' onSubmit={Test}>
        <div className="input-block">
          <label htmlFor="email">EMAIL: </label><br />
          <input type="text" name="email"/><br />
        </div>
        <div className="input-block">
          <label htmlFor="password">PASSWORD: </label><br />
          <input type="text" name="password"/><br />
        </div>
        <div className="input-block">
          <label htmlFor="name">NAME: </label><br />
          <input type="text" name='name'/><br />
        </div>
        <div className="input-block">
          <label htmlFor="age">AGE: </label><br />
          <input type="text" name='age'/><br />
        </div>
        <div className="input-block">
          <label htmlFor="breed">BREED: </label><br />
          <input type="text" name='breed'/><br />
        </div>
          <div className='select-container'>
          <div className='select'><Sex /></div>
          <div className='select'><Interest /></div>
          </div>
          <button className="register-button" type='submit' onClick={props.stateChange}>SIGN UP</button>
          <p className='login' >Already have an account? <button className='signup-button' onClick={openLogin} >SIGN IN</button></p>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Registration
