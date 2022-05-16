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
    <Select name="interest"  options={interestOptions} />
)
const Sex = () => (
    <Select name="sex" options={sexOptions} />
)

const Test = (event) => {
    event.preventDefault();
}

function Registration(props) {

  return (
    <div className={props.state? 'modal show' : 'modal hide'}>
      <div className='modal-content'>
      <form action='register' onSubmit={Test}>
          email:    <input type="text" name="email"/><br />
          password: <input type="text" name="password"/><br />
          name:     <input type="text" name='name'/><br />
          age:      <input type="text" name='age'/><br />
          breed:    <input type="text" name='breed'/><br />
          <div className='select'>sex: <Sex /></div>
          <div className='select'>interest: <Interest className='select'/></div>
          <button className="register-button" type='submit' onClick={props.stateChange}>Register</button>
      </form>
      </div>
    </div>
  )
}

export default Registration
