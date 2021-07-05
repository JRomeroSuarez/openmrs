import DeleteIcon from '@material-ui/icons/Delete';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

export const nameIcons = {
    DELETE: 'delete',
    MAIL: 'mail',
    SEARCH: 'search',
    DOWNLOAD: 'download',
    SHOW: 'show',
    UPLOAD: 'upload',
    NEW: 'new',
    ADD_USER: 'add_user',
    USER: 'user',
    SAD: 'sad'
}

export const iconsByName = {
    delete: <DeleteIcon/>,
    mail: <MailOutlineIcon/>,
    search: <SearchIcon/>,
    download: <GetAppIcon/>,
    show: <VisibilityOutlinedIcon/>,
    upload: <PublishIcon/>,
    new: <AddCircleOutlineIcon/>,
    add_user: <PersonAddOutlinedIcon/>,
    user: <PersonOutlinedIcon/>,
    sad: <SentimentVeryDissatisfiedIcon/>
}