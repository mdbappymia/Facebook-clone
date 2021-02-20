import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [state,dispatch] = useStateValue();


    const signIn = ()=>{
        auth
         .signInWithPopup(provider)
         .then((result)=>{

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
            console.log(result.user)

        })
        .catch((error)=>alert(error.message))
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://download.logo.wine/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.png" alt=""/>
                <h1 style={{color:'#1877F2',fontSize:40,textAlign:'center'}}>facebook</h1>
                
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
