import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Image, ListGroup } from 'react-bootstrap' 

export const SidebarRight = () => {
    
    const setNewsItem = (heading,when,readers) => {
        return <ListGroup.Item id='sidebar__news' className='px-3 pt-0 border-0 d-flex flex-direction-row rounded' style={{alignItems:'baseline' }}>
                    <div className='mr-2'><FiberManualRecordTwoToneIcon style={{ fontSize:13 }} /></div>
                    <div>
                        <div style={{ fontWeight:500, fontSize:14 }}>{heading}</div>
                        <div className='align-items-center' style={{ fontSize:12 }} className='text-muted font-weight-light'>{when}{" "}ago <FiberManualRecordIcon style={{ fontSize:6, color:'black' }} />{" "}{readers}{" "}readers</div>
                    </div>
                    </ListGroup.Item>
    }

    const setCourseItem = (index,heading,description) => {
        return <ListGroup.Item id='sidebar__news' className='px-3 pt-0 border-0 d-flex flex-direction-row rounded' style={{alignItems:'baseline' }}>
                    <div className='mr-2' style={{ fontWeight:500, fontSize:15 }}>{index}.</div>
                    <div>
                        <div style={{ fontWeight:500, fontSize:14 }}>{heading.slice(0,40)}...</div>
                        <div className='align-items-center' style={{ fontSize:12 }} className='text-muted font-weight-light'>{description.slice(0,40)}...</div>
                    </div>
                    <div className='ml-1 font-weight-bold' id='launch_another_news'><LaunchTwoToneIcon style={{ fontSize:15}}/></div>
                    </ListGroup.Item>
    }
    
    return (
        <ListGroup className='rounded' style={{ width:'23vw' }}>
            <ListGroup.Item className='px-0 mb-2'>
                <ListGroup className='py-2'>
                    <div className='px-4 d-flex flex-direction-row pb-2' style={{ justifyContent:'space-between' }}>
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
                    {setNewsItem('Covid surge kills shoppers\'\ appetite','10d','1,580')}
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className='border-top rounded px-0 mb-2'>
                <ListGroup className='border-0 py-2' >
                    <div className='px-3 d-flex flex-direction-row pb-2' style={{ justifyContent:'space-between' }}>
                        <div>Today's most viewed courses</div>
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
            <ListGroup.Item className='border-top rounded py-0 px-1'>
                <Image src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg' style={{ width:'22.3vw' }}/>
            </ListGroup.Item>
        </ListGroup>
    )
}
 