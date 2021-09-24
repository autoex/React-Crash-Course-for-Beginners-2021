import AllMeetUps from "../pages/AllMeetUps";
import Favorites from "../pages/Favorites";
import NewMeetUp from "../pages/NewMeetUp";

export const routes = [
    {path: '/all', pageId: 1, component: AllMeetUps, exact: true},
    {path: '/new', pageId: 2, component: NewMeetUp, exact: true},
    {path: '/favorites', pageId: 3, component: Favorites, exact: true},
];