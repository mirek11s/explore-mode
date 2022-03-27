import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {SiMarketo} from 'react-icons/si';
import {CgProfile} from 'react-icons/cg';
import {FaWpexplorer} from 'react-icons/fa'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Explore',
        path: '/explore',
        icon: <FaWpexplorer />,
        cName: 'nav-text'
    },
    {
        title: 'Market',
        path: '/market',
        icon: <SiMarketo />,
        cName: 'nav-text'
    },
    {
        title: 'My Profile',
        path: '/profile',
        icon: <CgProfile />,
        cName: 'nav-text'
    }
]