
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { adminLoginAction, subAdminLoginAction } from "../../actions/CommonActions";

export default function LoginForm(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    // const [error, setError ] = useState(false)
    const [ passwordRequired, setPasswordRequired] = useState(false)
    const [emailRequired, setEmailRequired] = useState(false)

    const { adminInfo } = useSelector(state => state.adminLogin)
    const { subAdminInfo } = useSelector(state => state.subAdminLogin)

    useEffect(() => {
      if(adminInfo && props.user === 'admin'){
        navigate('/')
      }else if(subAdminInfo && props.user === 'subAdmin'){
        navigate('/sub-admin')
      }
    }, [adminInfo, subAdminInfo, navigate, props.user])

    const submitForm = () => {
        if(!email){
            setEmailRequired(true)
        }
        if(!password){
            setPasswordRequired(true)
        }
        if(email && password){
            if(props.user === 'admin'){
              dispatch(adminLoginAction(email, password))
            }else if(props.user === 'subAdmin'){
              dispatch(subAdminLoginAction(email, password))
            }
        }
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        '& .MuiButtonBase-root' : { m : 1, width : '55ch'}
      }}
      noValidate
      autoComplete="off"
    >
        {
            props.user === 'admin' ?( <h1 style={{ textAlign : "center"}}>Admin Pannel</h1>) :
            props.user === 'subAdmin' ? (<h1 style={{ textAlign : "center"}}>Sub-Admin Pannel</h1>) : ''
        }
        
        {/* {
            error && "Error Found!..."
        } */}
      <div>
        <TextField
          error = {emailRequired}
          id="outlined-error-helper-text"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText = {emailRequired ? 'Email Required!...' : ''}
        />
        </div>
        <div>
        <TextField
          error ={passwordRequired}
          id="outlined-error-helper-text"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={passwordRequired ? 'Password Required!...' : ''}
        />
      </div>
      <div>
      <Button style={{ backgroundColor : "#e75c05"}} variant="contained" onClick={() => submitForm()}>
        Login
        </Button>
      </div>
    </Box>
  );
}
