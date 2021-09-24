import AllMeetUps from "../pages/AllMeetUps";
import Favorites from "../pages/Favorites";
import NewMeetUp from "../pages/NewMeetUp";

export const routes = [
    {path: '/', pageId: 1, component: AllMeetUps, exact: true, pageName: 'All Meet Ups'},
    {path: '/new', pageId: 2, component: NewMeetUp, exact: true, pageName: 'NewMeetUp'},
    {path: '/favorites', pageId: 3, component: Favorites, exact: true, pageName: 'Favorites'},
];