import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Client/Dashboard";
import Main from "./Main";

import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import AdminProjects from "./Admin/Projects/AdminProjects";
import AdminCollabs from "./Admin/Collabs/AdminCollabs";
import AdminAccount from "./Admin/AdminAccount/AdminAccount";
import ForgottenPassword from "./Admin/ForgottenPassword";

import CollabAnalytics from "./components/Client/CollabAnalytics";
import CollabSheet from "./components/Client/EntrySheet";
import DiscordStat from "./components/Client/DiscordStats";
import ProjectSettings from "./components/Client/ProjectSettings";
import ProjectSettingsSubber from "./components/Client/ProjectSettingsSubber";
import ScheduleCall from "./components/Client/ScheduleCall";
import RequestWhitelist from "./components/Client/RequestWhitelist";

import SetUp from "./Founder/FounderSetUp/SetUp";
import ProjectsName from "./Founder/FounderSetUp/ProjectsName";
import ProjectsImage from "./Founder/FounderSetUp/ProjectsImage";
import ProjectSocials from "./Founder/FounderSetUp/ProjectSocials";
import ProjectTemplate from "./Founder/FounderSetUp/ProjectTemplate";
import MintDetails from "./Founder/FounderSetUp/MintDetails";
import EntryRequirements from "./Founder/FounderSetUp/EntryRequirements";
import DiscordWinner from "./Founder/FounderSetUp/DiscordWinner";
import ProjectEnd from "./Founder/FounderSetUp/ProjectEnd";

import PrivateRoutes from "./Admin/Global/PrivateRoutes";

import { AuthProvider } from "./components/AuthContext";
import PageNotFound from "./components/PageNotFound";

import Calendars from "./Admin/Calendar/Calendar";
import Schedules from "./Admin/Schedules/Schedules";

import "./App.css";
import { ScheduleProvider } from "./Admin/Global/ScheduleApi";

function App() {
  return (
    <div className="App">
      <ScheduleProvider>
        {" "}
        <BrowserRouter>
          <Routes>
            <Route element={<AdminLogin />} path="/AdminLogin" />
            <Route element={<ForgottenPassword />} path="/ForgottenPassword" />
            {/* <Route element={<PrivateRoutes />}> */}
            <Route element={<AdminCollabs />} path="/AdminCollabs" />
            <Route element={<AdminDashboard />} path="/AdminDashboard" />
            <Route element={<AdminProjects />} path="/AdminProjects" />
            <Route element={<AdminAccount />} path="/AdminAccount" />
            <Route element={<Calendars />} path="/AdminCalendar" />
            <Route element={<Schedules />} path="/AdminSchedule" />
            {/* </Route> */}
            {/* <Route element={<PageNotFound />} path="/*" /> */}
          </Routes>
        </BrowserRouter>
      </ScheduleProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Founders setup protected */}

            <Route element={<SetUp />} path="/Setup" />
            <Route element={<ProjectsName />} path="/ProjectsName" />
            <Route element={<ProjectsImage />} path="/ProjectsImage" />
            <Route element={<ProjectSocials />} path="/ProjectsSocials" />
            <Route element={<ProjectTemplate />} path="/ProjectsTemplate" />
            <Route element={<MintDetails />} path="/MintDetails" />
            <Route element={<EntryRequirements />} path="/EntryRequirements" />
            <Route element={<DiscordWinner />} path="/DiscordWinner" />
            <Route element={<ProjectEnd />} path="/ProjectEnd" />

            {/* Client routes */}
            <Route element={<Dashboard />} path="/Dashboard" />
            <Route element={<CollabAnalytics />} path="/CollabAnalytics" />
            <Route element={<CollabSheet />} path="/EntrySheet" />
            <Route element={<DiscordStat />} path="/DiscordStats" />
            <Route
              element={<ScheduleCall />}
              path="/ScheduleCall"
            />
            <Route
              element={<ProjectSettings />}
              path="/ProjectSettings"
            />
            <Route
              element={<ProjectSettingsSubber />}
              path="/ProjectChooseSettings/ProjectSettingsSubber"
            />
            <Route element={<RequestWhitelist />} path="/RequestWhitelist" />
            <Route element={<Main />} path="/" exact />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
