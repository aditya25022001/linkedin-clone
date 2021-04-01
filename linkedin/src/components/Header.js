import React from 'react'
import '../styles/header.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsIcon from '@material-ui/icons/Sms';
import WorkIcon from '@material-ui/icons/Work';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupIcon from '@material-ui/icons/Group';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

export const Header = () => {
    return (
        <div className='py-2 px-3' id='header'>
            <div id='div_part_one_header' style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', flex:0.6 }}>
                <div id='div_part_one_subpart_one' style={{ display:'flex', flexDirection:'row'}}>
                    <LinkedInIcon style={{ fontSize:'6vh', color:'rgb(13,120,191)' }}/>
                    <div className='search_small_screen_display'>
                        <SearchRoundedIcon/>
                    </div>
                    <div className='search_header'>
                        <SearchRoundedIcon/>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div id='div_part_one_subpart_two' style={{  display:'flex', flexDirection:'row', justifyContent:'space-between', flex:0.6}}>
                    <HomeRoundedIcon/>
                    <SupervisorAccountIcon/>
                    <WorkIcon/>
                    <SmsIcon/>
                    <NotificationsIcon/>
                </div>
            </div>
            <div id='div_part_two_header' style={{  display:'flex', flexDirection:'row'}}>
                <div className='more_small_screen_display'>
                    <MoreHorizRoundedIcon/>
                </div>
                <div className='more_from_linked_in'>
                    <AppsIcon/>
                </div>
                <a href='/'>Try premium for one month</a>
            </div>
        </div>
    )
}
