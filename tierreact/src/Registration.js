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
    <Select name="interest" options={interestOptions} />
)
const Sex = () => (
    <Select name="sex" options={sexOptions} />
)

const Test = (event) => {
    event.preventDefault();
}

function Registration(props) {

  return (
    <div className={props.state? "show" : "hide"}>
      <form action='register' onSubmit={Test}>
          email: <input type="text" name="email"/><br />
          password: <input type="text" name="password"/><br />
          name: <input type="text" name='name'/><br />
          age: <input type="text" name='age'/><br />
          breed: <input type="text" name='breed'/><br />
          sex: <Sex />
          interest: <Interest />
          <button type='submit' onClick={props.stateChange}>Register</button>
      </form>
    </div>
  )
}

export default Registration
