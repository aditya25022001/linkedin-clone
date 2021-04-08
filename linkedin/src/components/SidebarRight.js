import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import LaunchTwoToneIcon from '@material-ui/icons/LaunchTwoTone';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { ListGroup, ListGroupItem } from 'react-bootstrap' 

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
            <ListGroup.Item className='border-top rounded'>
                <ListGroup className='border-0' >
                    <ListGroup.Item className='border-0'>

                    </ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
        </ListGroup>
    )
}
 