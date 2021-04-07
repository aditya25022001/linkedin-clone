import React, {useState} from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button, FormControl, FormLabel, ListGroup } from 'react-bootstrap';

export const SignUp = () => {

    const [login, setLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [profile, setProfile] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setcnfPassword] = useState('')

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')

    const changeToSignIn = (e) => {
        e.preventDefault()
        if(!login){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    }

    const signUpHandler = (e) => {
        e.preventDefault()
        console.log({email,name,password,cnfPassword,description,profile});
    }

    const signInHandler = (e) => {
        e.preventDefault()
        console.log({signInEmail,signInPassword})
    }

    return (
        <>
        {!login 
        ? <ListGroup className='pb-4 border-0' style={{ backgroundColor:'rgb(247,247,237)' }}>
            <ListGroup.Item className='align-items-center d-flex flex-direction-row h2 border-0 mx-auto pb-0' style={{ color:'rgb(2,110,199)', backgroundColor:'rgb(247,247,237)' }}>
                <div className='font-weight-bolder'>Linked</div>
                <LinkedInIcon style={{ fontSize:50 }}/>
            </ListGroup.Item>
            <ListGroup.Item className='mx-auto border-0 pt-0 text-center mb-2' style={{ fontWeight:400, fontSize:'4vh',backgroundColor:'rgb(247,247,237)'  }}>
                Make the most of your professional life
            </ListGroup.Item>
            <ListGroup className='mx-auto rounded'  style={{ width:'45vh' }}>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Name</FormLabel>
                    <FormControl type='text' className='py-0' value={name} onChange={e => setName(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Email</FormLabel>
                    <FormControl type='email' className='py-0' value={email} onChange={e => setEmail(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Password(6 or more characters)</FormLabel>
                    <FormControl type='password' className='py-0' value={password} onChange={e => setPassword(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Confirm Password</FormLabel>
                    <FormControl type='password' className='py-0' value={cnfPassword} onChange={e => setcnfPassword(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Profile URL</FormLabel>
                    <FormControl type="text" className='py-0' value={profile} onChange={e => setProfile(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <FormLabel className=' color-secondary h6'>Short About Yourself</FormLabel>
                    <FormControl as="textarea" rows={2} className='py-1 px-2' value={description} onChange={e => setDescription(e.target.value)}></FormControl>
                </ListGroup.Item>
                <ListGroup.Item className='border-bottom-0 pb-1'>
                    <Button style={{ width:'100%', borderRadius:150, backgroundColor:'rgb(2,110,199)', fontWeight:400 }} className='py-2' onClick={e => signUpHandler(e)}>Join Now!</Button>
                </ListGroup.Item>
                <ListGroup.Item className='text-center'>
                    Already on LinkedIn?
                    <a style={{ fontWeight:600, color:'rgb(2,110,199)' }} href='' onClick={e => changeToSignIn(e)}>Sign In</a>
                </ListGroup.Item>
            </ListGroup>
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
                New to LinkedIn? <span><a href='' style={{ color:'rgb(2,110,199)' }} className='font-weight-bold' onClick={e => changeToSignIn(e)}>Join now</a></span>
            </ListGroup.Item>
        </ListGroup>
        }
        </>
    )
}
