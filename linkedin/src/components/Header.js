import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLinkComponent } from './NavLinkComponent'
import { Navbar, Nav, Container, InputGroup, FormControl } from 'react-bootstrap'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import WorkIcon from '@material-ui/icons/Work';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Avatar from '@material-ui/core/Avatar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { logout, selectUser } from '../features/userSlice'
import { auth, db } from '../firebase'

export const Header = () => {

    const dispatch = useDispatch()

    const setBGColor = () => {
        return `rgb(${(0.8-Math.random())*255},${(0.8-Math.random())*255},${(0.8-Math.random())*255})`
    }

    const [currentUser, setCurrentUser] = useState({})

    const user = useSelector(selectUser) 

    useEffect(()=>{
        db.collection('linkedInUsers').where('id','==',user.uid).get().then(docs => {
            docs.forEach(doc => {
                setCurrentUser(doc.data())
            })              
        })
    },[user.uid])

    const logoutOfApp = (e) => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky='top' className='mt-0 py-0 border-bottom'>
            <Container className='p-0 mt-0' >
                <Navbar.Brand href="/"><LinkedInIcon style={{ fontSize:'6vh', color:'rgb(2,110,199)' }}/></Navbar.Brand>
                <div id='show_small_search'>
                    <Nav className='mr-auto'>
                        <Nav.Link>
                            <SearchRoundedIcon/>
                        </Nav.Link>
                    </Nav>
                </div>
                <div id='search_small' className='mr-5'>
                    <Nav className="mr-5">
                        <InputGroup className="rounded bg-light text-dark mr-5" id='input_header'>
                            <InputGroup.Prepend>
                                <InputGroup.Text className='bg-light text-dark border-0' id="basic-addon1"><SearchRoundedIcon/></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                id='input_header'
                                className='bg-light text-dark border-0 p-0 rounded'
                                placeholder="Search"
                            />
                        </InputGroup>
                    </Nav>
                </div>
                <NavLinkComponent className='mr-5' more={false} icon={<HomeRoundedIcon style={{ fontSize:25 }} />} label='Home' last={false}/>
                <NavLinkComponent className='mr-5' more={false} icon={<SupervisorAccountIcon style={{ fontSize:25 }} />} label='My Network' last={false}/>
                <NavLinkComponent className='mr-5' more={false} icon={<WorkIcon style={{ fontSize:25 }}/>} label='Jobs' last={false} />
                <NavLinkComponent className='mr-5' more={false} icon={<SmsIcon style={{ fontSize:25 }} />} label='Messages' last={false}/>
                <NavLinkComponent className='mr-5' more={false} icon={<NotificationsIcon style={{ fontSize:25 }} />} label='Notifications' last={false}/>
                {currentUser.photo!==''
                ?<NavLinkComponent more={true} icon={<Avatar style={{ width:'4vh', height:'4vh'}} src={currentUser.photo}/>} label='Me' last={true} moreIcon={<ArrowDropDownRoundedIcon/>}/>
                :<NavLinkComponent more={true} icon={<Avatar style={{ width:'4vh', height:'4vh', backgroundColor:setBGColor()}}>{currentUser.userName[0].toUpperCase()}</Avatar>} label='Me' last={true} moreIcon={<ArrowDropDownRoundedIcon/>}/>
                }
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border:'none' }} >
                    <span style={{ border:'none' }}>
                        <MoreHorizRoundedIcon/>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div onClick={e => logoutOfApp(e)} >
                        <NavLinkComponent className='mr-5' more={false} icon={<PowerSettingsNewIcon style={{ fontSize:25 }} />} label='Logout' last={false}/>
                    </div>
                    <Nav>
                        <Nav.Link  id='try_premium' style={{ fontSize:12, color:'rgb(120,102,1)', width:'70%', textAlign:'center' }} >Try Premium Free for 1 month</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
