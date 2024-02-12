

import React, { useState, useEffect } from 'react';

import { Dialog, DialogContent, TextField, Box, Button, Typography, styled } from '@mui/material';

import { authenticateLogin, authenticatesSignup } from '../../service/api';

const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({ open, setOpen, setAccount }) => {
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    const signupUser = async() => {
        let response = await authenticatesSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                   
                    {
                        account.view === 'login' ? 
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                            { error && <Error>Please enter valid Email ID/Mobile number</Error> }
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                           

                            <Text style={{textAlign:'center'}}>OR</Text>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to Nykaa? Create an account</CreateAccount>
                        </Wrapper> : 
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                            <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                       
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;



// const Components= styled(Box)`
// height: 80vh;
// width: 90vh;

// `
// const Wrapper= styled(Box)`
// display:flex;
// flex-direction:column;
// `
// const LogInButton = styled(Button)`
// text-transform:none;
// background-color:#FF1493;
// height:48px;
// border-radius:2px;
// color:white;
// `
// const RequestOTP = styled(Button)`
// text-transform:none;
// background-color:#FF1493;
// height:48px;
// border-radius:2px;
// `

// const Text= styled(Typography)` 
// font-size:12px;
// `
// const Error= styled(Typography)`
// font-size:10px;
// color:red;
// line-height:0px;
// margin-top:10px;
// font-weight:600;
// `

// const accountInitialValues= {
//   login:{
//     view:"login",
//     heading:"Login",
  
//   },
//   signup:{
//     view:"signup",
  
//   }
// }

// const signupInitialValues={
//   firstname:"",
//   lastname:"",
//   username:"",
//   email:"",
//   password:"",
//   phone:""
// }

// const loginInitialValues={
//  username:'',
//  password:""

// }
// const LoginDialLog = ({open,setOpen}) => {

//   const [account, toggleAccount]= useState(accountInitialValues.login)
// const [signup,setSignup]= useState(signupInitialValues)
// const [login,setLogin]= useState(loginInitialValues)
// const [error,setError]=useState(false)

// const {setAccount} = useContext(DataContext);


//     const handleClose=()=>{
//         setOpen(false)
//         toggleAccount(accountInitialValues.login)
//         setError(false)
//     }


//     const toggleSignup=()=>{
      
//         toggleAccount(accountInitialValues.signup)
//     }

//     const onInputChange=(e)=>{
//      setSignup({...signup, [e.target.name]:e.target.value});
     
//     }


// const signupUser = async() => {
//   let response = await authenticatesSignup(signup);
//   if(!response) return;
//   handleClose();
//   setAccount(signup.username);
// }


// const onValueChange=(e)=>{
// setLogin({...login, [e.target.name]: e.target.value})
// }

// const loginUser=async()=>{
// let response=await authenticateLogin(login)
// if(response.status === 200){
//   handleClose();
//   setAccount(response.data.firstname);

// }else{
//   setError(true);
// }
// }

//   return (
//     <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxwidth:'unset'}}} >
//      <Components>
//       <Typography style={{fontSize:"20px",fontWeight:"300",marginLeft:"90px",marginTop:"20px"}} >Login / Create Account</Typography><hr />
//       <Box style={{display:"flex",hieght:"100%",marginLeft:"90px",marginTop:"50px"}} >
 
//  { account.view === 'login'  ?
//         <Wrapper>
//             <Text>Register now and get 2000 Nykaa reward points instantly!</Text>
//             <TextField variant='standard'onChange={(e)=> onValueChange(e)} name='username' label="Enter username"/>

//            {error && <Error style={{marginTop:"14px"}} >Please enter valid username or password</Error>}


//             <TextField variant='standard'onChange={(e)=> onValueChange(e)} name='password'  label="Enter Password"/>
//             <LogInButton onClick={()=>loginUser()} style={{backgroundColor:"#FF1493",color:"white"}} >
//               login
//             </LogInButton>
//             <Typography style={{textAlign:"center"}} >OR</Typography>
//             <RequestOTP style={{backgroundColor:"#FF1493",color:"white"}} >Request OTP</RequestOTP>
//             <Typography onClick={()=>toggleSignup()} style={{textAlign:"center",cursor:"pointer",color:"blue",marginTop:"14px"}} >New to Nykaa ? Create an account</Typography>
//         </Wrapper>
//         :
//         <Wrapper>
//             <Text>Register now and get 2000 Nykaa reward points instantly!</Text>
//             <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='firstname' label="Enter Firstname"/>
//             <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='lastname' label="Enter Lastname "/>
//             <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='username' label="Enter Username"/>
//             <TextField variant='standard' onChange={(e)=> onInputChange(e)}  name='email' label="Enter Email "/>
//             <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='password' label="Enter Password "/>
//             <TextField variant='standard' onChange={(e)=> onInputChange(e)} name='phone' label="Enter Phone "/>

         
         
//             <LogInButton onClick={() => signupUser()} >Continue</LogInButton>

//         </Wrapper>
// }
//         <></>
//       </Box>

//      </Components>
//     </Dialog>
//   )
// }

// export default LoginDialLog

