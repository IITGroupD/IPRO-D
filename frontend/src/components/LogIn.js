import React from 'react'
import GoogleLogin from 'react-google-login'

const LogIn = ({loginData, handleLogOut, handleLogin, handleFailure}) => {
  return (
    <div>
      {loginData 
        ? 
          (
            <div>
              <h3>{`Hi, ${loginData.name}!`}</h3>
              <button onClick={handleLogOut}>Logout</button>
            </div>
          )
        : 
          (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}>   
            </GoogleLogin>
          )
      }
    </div>
  )
}

export default LogIn
