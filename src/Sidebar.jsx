import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import  LocalHospitalIcon  from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import MessageEventIcon from '@material-ui/icons/Message'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars.githubusercontent.com/u/61800469?s=60&v=4" title='Bappy Mia'/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Page"/>
            <SidebarRow Icon={PeopleIcon} title="Froends" />
            <SidebarRow Icon={MessageEventIcon} title="Messenger" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar
