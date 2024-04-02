import * as React from 'react';
import { useState } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InventoryIcon from '@mui/icons-material/Inventory';
import GridViewIcon from '@mui/icons-material/GridView';

const SideBar = () => {
    const location = useLocation();
    const [openTransaction, setOpenTransaction] = useState(false);
    const [openSubscription, setOpenSubscription] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    const handleSubscriptionClick = () => {
        setOpenSubscription(!openSubscription);
    };
    const handleTransactionClick = () => {
        setOpenTransaction(!openTransaction);
    };
    const handleSettingsClick = () => {
        setOpenSettings(!openSettings);
    };

    return (
        <div style={{backgroundColor: '#dfa24b', marginTop: '-8px', minHeight: '100vh' }}>
            <React.Fragment>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <DashboardIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" style={{ color: 'white' }} />
                </ListItemButton>
                <ListItemButton component={Link} to="/SuperAdmin/school/showschool">
                    <ListItemIcon>
                        <SchoolIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Schools" style={{ color: 'white' }} />
                </ListItemButton>
                <ListItemButton component={Link} to="/SuperAdmin/school/createschool">
                    <ListItemIcon>
                        <AddIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Create School" style={{ color: 'white' }} />
                </ListItemButton>
                <ListItemButton onClick={handleSubscriptionClick}>
                    <ListItemIcon>
                        <LoyaltyIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Subscription" style={{ color: 'white' }} />
                    {openSubscription ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubscription} timeout="auto" unmountOnExit>
                    <ListItemButton component={Link} to="/SuperAdmin/subscriptionreport">
                        <ListItemText primary="Subscription Report" style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/SuperAdmin/expiredsubscription">
                        <ListItemText primary="Expired Subscription" style={{ color: 'white' }} />
                    </ListItemButton>
                </Collapse>
                <ListItemButton component={Link} to="/SuperAdmin/showbank">
                    <ListItemIcon>
                        <GppMaybeIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Bank" style={{ color: 'white' }} />
                </ListItemButton>
                <ListItemButton onClick={handleTransactionClick}>
                    <ListItemIcon>
                        <PaidIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Transaction" style={{ color: 'white' }} />
                    {openTransaction ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openTransaction} timeout="auto" unmountOnExit>
                    <ListItemButton component={Link} to="/SuperAdmin/banktransfer">
                        <ListItemText primary="Bank Transfer" style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/SuperAdmin/cashinhands">
                        <ListItemText primary="Cash in Hands" style={{ color: 'white' }} />
                    </ListItemButton>
                </Collapse>
                <ListItemButton component={Link} to="/SuperAdmin/students">
                    <ListItemIcon>
                        <InventoryIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Package" style={{ color: 'white' }} />
                </ListItemButton>
                <ListItemButton component={Link} to="/SuperAdmin/addons/addaddons">
                    <ListItemIcon>
                        <GridViewIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Addons" style={{ color: 'white' }} />
                </ListItemButton>
                <ListItemButton onClick={handleSettingsClick}>
                    <ListItemIcon>
                        <SettingsOutlinedIcon style={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" style={{ color: 'white' }} />
                    {openSettings ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSettings} timeout="auto" unmountOnExit>
                    <ListItemButton component={Link} to="/SuperAdmin/setting/systemsetting">
                        <ListItemText primary="System Settings" style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/SuperAdmin/setting/WebsiteSetting">
                        <ListItemText primary="Website Settings" style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/SuperAdmin/setting/ManageFaq">
                        <ListItemText primary="Manage FAQ" style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/SuperAdmin/setting/LanguageSetting">
                        <ListItemText primary="Language Setting" style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/SuperAdmin/setting/SmtpSetting">
                        <ListItemText primary="Smtp Setting" style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/SuperAdmin/setting/About">
                        <ListItemText primary="About" style={{ color: 'white' }} />
                    </ListItemButton>
                </Collapse>
            </React.Fragment>
        </div>
    )
}

export default SideBar;
