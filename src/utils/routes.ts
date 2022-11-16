import ProfilePage from "../pages/profile-page/ProfilePage";
import HomePage from "../pages/HomePage";
import VideoPage from "../pages/video-page/VideoPage";
import AddVideoPage from "../pages/add-video-page/AddVideoPage";
import AuthPage from "../pages/auth-page/AuthPage";
import RegistrationPage from "../pages/registration-page/RegistrationPage";

export const HOME_ROUTE = '/'
export const UPLOAD_VIDEO_ROUTE = '/upload'
export const VIDEO_ROUTE = '/watch'
export const PROFILE_ROUTE = '/profile'
export const AUTH_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'

export const authRouts = [
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: UPLOAD_VIDEO_ROUTE,
        Component: AddVideoPage
    },
]

export const publicRouts = [
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
    {
        path: VIDEO_ROUTE,
        Component: VideoPage
    },
    {
        path: AUTH_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    }

]
