import React from 'react'

const RegisterForm = () => {
  return (
    <form className='authForms register_form' action='http://localhost:4000/register' method='POST'>
        <h1>Register</h1>
        <label htmlFor="name">Name</label>
        <input name='name' id='name' type="text" placeholder='Enter your name' required />
        <label htmlFor="surname">Surname</label>
        <input name='surname' id='surname' type="text" placeholder='Enter your surname' required />
        <label htmlFor="email">Email</label>
        <input name='email' id='email' type="email" placeholder='Enter your email' required />
        <label htmlFor="userName">User Name</label>
        <input name='userName' id='userName' type="text" placeholder='Enter a user name' required />
        <label htmlFor="name">Password</label>
        <input name='password' id='password' type="password" placeholder='Create a password' required/>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default RegisterForm
