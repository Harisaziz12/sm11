import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar, Drawer } from '../../components/styles';
import Logout from '../Logout';
import SideBar from './SideBar';
import SuperAdminProfile from './SuperAdminProfile';
import SuperAdminHomePage from './SuperAdminHomePage';

import AddStudent from './studentRelated/AddStudent';
import SeeComplains from './studentRelated/SeeComplains';
import ShowStudents from './studentRelated/ShowStudents';
import StudentAttendance from './studentRelated/StudentAttendance';
import StudentExamMarks from './studentRelated/StudentExamMarks';
import ViewStudent from './studentRelated/ViewStudent';

import CreateSchool from './schoolRelated/CreateSchool';

import AddAddons from './addons/AddAddons';
import ShowAddons from './addons/ShowAddons';

import ShowSchools from './schoolRelated/ShowSchools';
import AccountMenu from '../../components/AccountMenu';

import SystemSetting from './settingRelated/SystemSetting';
import WebsiteSetting from './settingRelated/WebsiteSetting';
import ManageFaq from './settingRelated/ManageFaq';
import LanguageSetting from './settingRelated/LanguageSetting';
import SmtpSetting from './settingRelated/SmtpSetting';
import About from './settingRelated/About';

import ShowBank from './Bank/ShowBank';
import AddBank from './Bank/AddBank';

import SubscriptionReport from './subscriptioRelated/SubscriptionReport';
import ExpiredSubscription from './subscriptioRelated/ExpiredSubscription';

import BankTransfer from './transactionRelated/BankTransfer';
import Cashinhands from './transactionRelated/Cashinhands';

const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar open={open} position='absolute' sx={{ backgroundColor: '#dfa24b' }}>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Super Admin Dashboard
                        </Typography>
                        <AccountMenu />
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <SideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<SuperAdminHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/SuperAdmin/dashboard" element={<SuperAdminHomePage />} />
                        <Route path="/SuperAdmin/profile" element={<SuperAdminProfile />} />
                        <Route path="/SuperAdmin/complains" element={<SeeComplains />} />

                        {/* Addons */}
                        <Route path="/SuperAdmin/addons/addaddons" element={<AddAddons/>} />
                        <Route path="/SuperAdmin/showaddons" element={<ShowAddons />} />



                        <Route path="/SuperAdmin/subject/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
                        <Route path="/SuperAdmin/subject/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />

                        {/* Class */}
                        <Route path="/SuperAdmin/class/addstudents/:id" element={<AddStudent situation="Class" />} />

                        {/* Student */}
                        <Route path="/SuperAdmin/addstudents" element={<AddStudent situation="Student" />} />
                        <Route path="/SuperAdmin/students" element={<ShowStudents />} />
                        <Route path="/SuperAdmin/students/student/:id" element={<ViewStudent />} />
                        <Route path="/SuperAdmin/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} />
                        <Route path="/SuperAdmin/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} />


                        {/* Create School */}
                        <Route path="/SuperAdmin/school/createschool" element={<CreateSchool />} />

                        {/* Schools */}
                        <Route path="/SuperAdmin/school/showschool" element={<ShowSchools />} />

                        {/* Setting */}
                        <Route path="/SuperAdmin/setting/systemsetting" element={<SystemSetting />} />
                        <Route path="/SuperAdmin/setting/WebsiteSetting" element={<WebsiteSetting />} />
                        <Route path="/SuperAdmin/setting/ManageFaq" element={<ManageFaq />} />
                        <Route path="/SuperAdmin/setting/LanguageSetting" element={<LanguageSetting />} />
                        <Route path="/SuperAdmin/setting/SmtpSetting" element={<SmtpSetting />} />
                        <Route path="/SuperAdmin/setting/About" element={<About/>} />

                        {/* Subscription */}
                        
                        <Route path="/SuperAdmin/subscriptionreport" element={<SubscriptionReport />} />
                        <Route path="/SuperAdmin/expiredsubscription" element={<ExpiredSubscription />} />
                        
                        {/* Bank */}
                        
                        <Route path="/SuperAdmin/showbank" element={<ShowBank />} />
                        <Route path="/SuperAdmin/addbank" element={<AddBank />} />

                        {/* Subscription */}

                        <Route path="/SuperAdmin/banktransfer" element={<BankTransfer />} />
                        <Route path="/SuperAdmin/cashinhands" element={<Cashinhands />} />







                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default AdminDashboard

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        minheight: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}
