import AdminPanel from "../Pages/AdminPanel.js";
import Auth from "../Pages/Auth.js";
import ChooseInstitute from "../Pages/ChooseInstitute.js";
import InstituteInfo from "../Pages/InstituteInfo";
import InstituteMap from "../Pages/InstituteMap.js";
import InstitutePage from "../Pages/InstitutePage.js";
import UserInfo from "../Pages/UserInfo.js";
import UserSettings from "../Pages/UserSettings.js";
import {
  ADMINPANEL_ROUTE,
  CHOOSEINSTITURE_ROUTE,
  INSTITUTEINFO_ROUTE,
  INSTITUTEMAP_ROUTE,
  INSTITUTEPAGE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  USERINFO_ROUTE,
  USERSETTINGS_ROUTE,
} from "./Consts.js";

export const publicRoutes = [
  { path: LOGIN_ROUTE, component: <Auth /> },
  { path: REGISTRATION_ROUTE, component: <Auth /> },
  { path: CHOOSEINSTITURE_ROUTE, component: <ChooseInstitute /> },
  { path: INSTITUTEMAP_ROUTE, component: <InstituteMap /> },
];
export const authRoutes = [
  { path: INSTITUTEMAP_ROUTE, component: <InstituteMap /> },
  { path: INSTITUTEINFO_ROUTE, component: <InstituteInfo /> },
  { path: INSTITUTEPAGE_ROUTE, component: <InstitutePage /> },
  { path: USERSETTINGS_ROUTE, component: <UserSettings /> },
  { path: USERINFO_ROUTE, component: <UserInfo /> },
  { path: ADMINPANEL_ROUTE, component: <AdminPanel /> },
];
