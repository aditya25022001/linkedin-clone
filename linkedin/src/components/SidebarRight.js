import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Button, Image, ListGroup } from 'react-bootstrap' 
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';

export const SidebarRight = () => {
    
    const setNewsItem = (heading,when,readers) => {
        return <ListGroup.Item id='sidebar__news' className='px-3 pt-0 border-0 d-flex flex-direction-row rounded' style={{alignItems:'baseline' }}>
                    <div className='mr-2'><FiberManualRecordTwoToneIcon style={{ fontSize:13 }} /></div>
                    <div>
                        <div style={{ fontWeight:500, fontSize:14 }}>{heading}</div>
                        <div style={{ fontSize:12 }} className='align-items-center text-muted font-weight-light'>{when}{" "}ago <FiberManualRecordIcon style={{ fontSize:6, color:'black' }} />{" "}{readers}{" "}readers</div>
                    </div>
                    </ListGroup.Item>
    }

    const setCourseItem = (index,heading,description) => {
        return <ListGroup.Item id='sidebar__news' className='px-3 pt-0 border-0 d-flex flex-direction-row rounded' style={{alignItems:'baseline' }}>
                    <div className='mr-2' style={{ fontWeight:500, fontSize:15 }}>{index}.</div>
                    <div>
                        <div style={{ fontWeight:500, fontSize:14 }}>{heading.slice(0,40)}...</div>
                        <div style={{ fontSize:12 }} className='align-items-center text-muted font-weight-light'>{description.slice(0,40)}...</div>
                    </div>
                    <div className='ml-1 font-weight-bold' id='launch_another_news'><LaunchTwoToneIcon style={{ fontSize:15}}/></div>
                    </ListGroup.Item>
    }

    const setHashItem = (heading) => {
        return <ListGroup.Item className='border-0 py-2'>
            <div className='d-flex flex-direction-row rounded'>
                <div className='mr-2'>
                    <Avatar style={{ fontSize:30, fontWeight:500, backgroundColor:'gray'}}>#</Avatar>
                </div>
                <div>
                    <div style={{ fontWeight:500, fontSize:14 }}>#{heading}</div>
                    <div>
                        <Button style={{fontWeight:500, borderRadius:150 }} variant='light' className='border py-1'>
                            <AddIcon style={{ fontSize:18 }} />{" "}Follow
                        </Button>
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    }
    
    return (
        <ListGroup className='rounded' style={{ width:'23vw' }}>
            <ListGroup.Item className='px-0 mb-2' style={{ borderRadius:10 }}>
                <ListGroup className='py-2'>
                    <div className='px-4 d-flex flex-direction-row pb-2' style={{ justifyContent:'space-between', fontWeight:500, fontSize:15, cursor:'pointer' }}>
                        <div>LinkedIn News</div>
                        <Tooltip placement="right" title="These are the day’s top professional news stories and conversations. Learn more about how they’re selected.">
                            <InfoIcon style={{ fontSize:18 }} />
                        </Tooltip>
                    </div>
                    {setNewsItem('Using a job offer to get pay hike','5d','22,052')}
                    {setNewsItem('Is WHF burdening women?','8d','13,134')}
                    {setNewsItem('Pets dread the return to offices, too','42m','10,088')}
                    {setNewsItem('How to spend a day off work','13d','4,942')}
                    {setNewsItem('What burnout does to your health','48m','4,454')}
                    {setNewsItem('A surprising way to stay focused','8d','4,272')}
                    {setNewsItem('Setting career goals in pandemic','38m','3,952')}
                    {setNewsItem('Pepsi to get fizzier','8d','3,954')}
                    {setNewsItem('Wave 2 threatens economic recovery','9d','3,326')}
                    {setNewsItem('Covid surge kills shoppers\' appetite','10d','1,580')}
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className='border-top px-0 mb-2' style={{ borderRadius:10 }}>
                <ListGroup className='border-0 py-2'>
                    <div className='px-3 d-flex flex-direction-row pb-2' style={{ justifyContent:'space-between' }}>
                        <div style={{ fontWeight:500, fontSize:15, cursor:'pointer' }}>Today's most viewed courses</div>
                        <Tooltip placement="right" title="These are the day’s most watched courses on LinkedIn Learning. Learn more about how they’re selected.">
                            <InfoIcon style={{ fontSize:18 }} />
                        </Tooltip>
                    </div>
                    {setCourseItem(1,'The Six Morning Habits of High Performance','Pete Mockaitis | How to be Awesome at Your')}
                    {setCourseItem(2,'Body Language for Authentic Leaders','Erica Dhawan')}
                    {setCourseItem(3,'Speaking Confidently and Effectively','Pete Mockaitis | How to be Awesome at Your')}
                    <div className="d-flex flex-direction-row align-items-center px-3">
                        <div className='text-muted' style={{ fontWeight:500, fontSize:14 }}>Show more on LinkedIn learning</div>
                        <div className='text-muted' style={{ fontWeight:500 }}>
                            <ArrowForwardTwoToneIcon style={{ fontSize:15}}/>
                        </div>
                    </div>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className='border-top py-0 px-1 mb-2'>
                <Image src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg' style={{ width:'22.3vw' }}/>
            </ListGroup.Item>
            <ListGroup.Item className='border-top px-0' style={{ borderRadius:10 }}>
                <div className='px-3 d-flex flex-direction-row pb-2' style={{ justifyContent:'space-between' }}>
                    <div style={{ fontWeight:500, fontSize:15, cursor:'pointer' }}>Add to your feed</div>
                    <Tooltip placement="right" title="Follow things that interest you to personalize your feed. Learn more.">
                        <InfoIcon style={{ fontSize:18 }} />
                    </Tooltip>
                </div>
                {setHashItem('coding')}
                {setHashItem('entrepreneurship')}
                <div className="d-flex flex-direction-row align-items-center px-3 mt-1">
                    <div className='text-muted' style={{ fontWeight:500, fontSize:14 }}>View all recommendations</div>
                    <div className='text-muted' style={{ fontWeight:500 }}>
                        <ArrowForwardTwoToneIcon style={{ fontSize:15}}/>
                    </div>
                </div>
            </ListGroup.Item>
        </ListGroup>
    )
}
 