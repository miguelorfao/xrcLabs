import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Client/Dashboard";
import Main from "./Main";

import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import AdminProjects from "./Admin/Projects/AdminProjects";
import AdminCollabs from "./Admin/Collabs/AdminCollabs";
import AdminAccount from "./Admin/AdminAccount/AdminAccount";
import ForgottenPassword from "./Admin/ForgottenPassword";

import CollabStat from "./components/Client/CollabStat";
import CollabSheet from "./components/Client/CollabSheet";
import DiscordStat from "./components/Client/DiscordStats";
import ProjectSettings from "./components/Client/ProjectSettings";
import ProjectWl from "./components/Client/ProjectWL";

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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Founders setup protected */}
            <Route element={<Main />} path="/" exact />
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
            <Route element={<CollabStat />} path="/CollabStats" />
            <Route element={<CollabSheet />} path="/CollabSheet" />
            <Route element={<DiscordStat />} path="/DiscordStats" />
            <Route element={<ProjectSettings />} path="/ProjectSettings" />
            <Route element={<ProjectWl />} path="/ProjectWL" />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AdminLogin />} path="/AdminLogin" />
          <Route element={<ForgottenPassword />} path="/ForgottenPassword" />
          <Route element={<PrivateRoutes />}>
            <Route element={<AdminCollabs />} path="/AdminCollabs" />
            <Route element={<AdminDashboard />} path="/AdminDashboard" />
            <Route element={<AdminProjects />} path="/AdminProjects" />
            <Route element={<AdminAccount />} path="/AdminAccount" />
          </Route>

          {/* <Route element={<PageNotFound />} path="/*" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
