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


import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import TocIcon from '@material-ui/icons/Toc';
import IconButton from '@material-ui/core/IconButton';

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
    SAD: 'sad',
    FAVORITE: 'favorite',
    SETTINGS: 'settings',
    PEOPLE: 'people',
    ADD: 'add',
    TOC: 'toc',
    ICON: 'icon'
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
    sad: <SentimentVeryDissatisfiedIcon/>,
    favorite: <FavoriteIcon/>,
    settings: <SettingsIcon/>,
    people: <PeopleIcon/>,
    add: <AddIcon/>,
    remove: <RemoveIcon/>,
    toc: <TocIcon/>,
    icon: <IconButton/>

}