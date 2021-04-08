import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Alert, Button, FormControl, FormLabel, ListGroup } from 'react-bootstrap';
import { auth, db } from '../firebase';
import { login } from '../features/userSlice';

export const SignUp = () => {

    const dispatch = useDispatch()

    const [loginPage, setLoginPage] = useState(true)
    const [message, setMessage] = useState('')

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [profile, setProfile] = useState('')
    const [profileBackground, setProfileBackground] = useState('')
    const [password, setPassword] = useState('')
    const [catchLine, setCatchLine] = useState('')
    const [cnfPassword, setcnfPassword] = useState('')

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const changeToSignIn = (e) => {
        e.preventDefault()
        if(!loginPage){
            setLoginPage(true)
        }
        else{
            setLoginPage(false)
        }
    }

    const signUpHandler = (e) => {
        e.preventDefault()
        if(!name || !password || !cnfPassword || !email || !description || !catchLine){
            document.getElementById('message__signup').style.display='inline-block';
            setMessage('* marked fields are necessary')
        }
        else{
            if(password!==cnfPassword){
                document.getElementById('message__signup').style.display='inline-block';
                setMessage('Passwords do not match')
            }
            else{
                document.getElementById('message__signup').style.display='none';
                setMessage('')
                auth.createUserWithEmailAndPassword(email, password)
                .then((userAuth) => {
                    userAuth.user.updateProfile({
                        displayName:name,
                        photoURL:profile
                    })
                    db.collection('linkedInUsers').add({
                        userName:name,
                        userEmail:userAuth.user.email,
                        userDescription:description,
                        photo:profile,
                        bgPhoto:profileBackground,
                        catchyLine:catchLine,
                        id:userAuth.user.uid
                    })
                    .then(() => {
                        dispatch(login({
                            email:userAuth.user.email,
                            uid:userAuth.user.uid,
                            displayName:name,
                            photoUrl:profile,
                            bgphotoUrl:profileBackground,
                            catchyLine:catchLine
                        }))
                    })
                })
                .catch(error => {
                    document.getElementById('message__signup').style.display='inline-block';
                    setMessage(error.message)
                })
            }
        }
    }

    const signInHandler = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(signInEmail,signInPassword)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.profileURL
            }))
        })
        .catch(error => {                    
            document.getElementById('message__signup').style.display='inline-block';
            setMessage(error.message)
        })
    }

    return (
        <>
        {!loginPage 
        ? <ListGroup className='pb-4 border-0' style={{ backgroundColor:'rgb(247,247,237)' }}>
            <ListGroup.Item className='align-items-center d-flex flex-direction-row h2 border-0 mx-auto pb-0' style={{ color:'rgb(2,110,199)', backgroundColor:'rgb(247,247,237)' }}>
                <div className='font-weight-bolder'>Linked</div>
                <LinkedInIcon style={{ fontSize:50 }}/>
            </ListGroup.Item>
            <ListGroup.Item className='mx-auto border-0 pt-0 text-center mb-2' style={{ fontWeight:400, fontSize:'4vh',backgroundColor:'rgb(247,247,237)'  }}>
                Make the most of your professional life
            </ListGroup.Item>
            <ListGroup className='mx-auto rounded'  style={{ width:'50vh' }}>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Name<span style={{ color:'red' }}>*</span></FormLabel>
                    <FormControl type='text' className='py-0' placeholder='Enter full name' value={name} onChange={e => setName(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Email<span style={{ color:'red' }}>*</span></FormLabel>
                    <FormControl type='email' className='py-0' placeholder='Email address' value={email} onChange={e => setEmail(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Password(6 or more characters)<span style={{ color:'red' }}>*</span></FormLabel>
                    <FormControl placeholder='Create password' type='password' className='py-0' value={password} onChange={e => setPassword(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Confirm Password<span style={{ color:'red' }}>*</span></FormLabel>
                    <FormControl type='password' className='py-0' placeholder='Re-enter password' value={cnfPassword} onChange={e => setcnfPassword(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Profile Photo URL</FormLabel>
                    <FormControl type="text" className='py-0' placeholder='Provide online link to your pic' value={profile} onChange={e => setProfile(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Background Photo URL</FormLabel>
                    <FormControl type="text" className='py-0' placeholder='Provide online link to your pic' value={profileBackground} onChange={e => setProfileBackground(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Catch Line<span style={{ color:'red' }}>*</span></FormLabel>
                    <FormControl type='text' className='py-0' placeholder='Displayed when you post' value={catchLine} onChange={e => setCatchLine(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Short About Yourself<span style={{ color:'red' }}>*</span></FormLabel>
                    <FormControl as="textarea" rows={2} placeholder='Describe yourselves in short paragraph' className='py-1 px-2' value={description} onChange={e => setDescription(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <Button style={{ width:'100%', borderRadius:150, backgroundColor:'rgb(2,110,199)', fontWeight:400 }} className='py-2' onClick={e => signUpHandler(e)}>Join Now!</Button>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    Already on LinkedIn?
                    <span id='span__signup' style={{ fontWeight:600, color:'rgb(2,110,199)' }} onClick={e => changeToSignIn(e)}>Sign In</span>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item id='message__signup' style={{ backgroundColor:'rgb(247,247,237)'}} className='border-0 mx-auto'>
                <Alert variant='danger'>{message}</Alert>
            </ListGroup.Item>
        </ListGroup>
        : <ListGroup className='mx-auto pt-5' style={{ backgroundColor:'rgb(247,247,237)' }}>
            <ListGroup.Item className='mx-auto border-0 d-flex flex-direction-row mb-1' style={{color:'rgb(2,110,199)', backgroundColor:'rgb(247,247,237)' }}>
                <div className='font-weight-bold h3 rounded mr-0'>Linked</div>
                <LinkedInIcon style={{ fontSize:'4.6vh' }} />
            </ListGroup.Item>
            <ListGroup className='mx-auto rounded' style={{ boxShadow:"1px 1px 10px rgb(237,235,228)" }}>
                <ListGroup.Item className='border-bottom-0'>
                    <div className='font-weight-bold h5'>Sign in</div>
                    <div className='text-muted'>Stay updated on your professional world</div>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0'>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" value={signInEmail} onChange={e => setSignInEmail(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0'>
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" value={signInPassword} onChange={e => setSignInPassword(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0' style={{ color:'rgb(2,110,199)', fontWeight:600 }}>
                    Forgot password?
                </ListGroup.Item>
                <ListGroup.Item className='pb-4'>
                    <Button style={{ width:'100%', borderRadius:150, backgroundColor:'rgb(2,110,199)' }} onClick={e => signInHandler(e)}>Sign In</Button>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item className='border-0 mx-auto' style={{ backgroundColor:'rgb(247,247,237)' }}>
                New to LinkedIn? <span id='span__signup' style={{ color:'rgb(2,110,199)', fontWeight:600 }} onClick={e => changeToSignIn(e)}>Join now</span>
            </ListGroup.Item>
            <ListGroup.Item id='message__signup' style={{ backgroundColor:'rgb(247,247,237)'}} className='border-0 mx-auto'>
                <Alert variant='danger'>{message}</Alert>
            </ListGroup.Item>
        </ListGroup>
        }
        </>
    )
}
