import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Client/Dashboard";
import Main from "./pages/Main";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProjects from "./pages/Admin/AdminProjects";
import AdminCollabs from "./pages/Admin/AdminCollabs";
import AdminAccount from "./pages/Admin/AdminAccount";
import CollabStat from "./components/Client/CollabStat";
import CollabSheet from "./components/Client/CollabSheet";
import DiscordStat from "./components/Client/DiscordStats";
import ProjectSettings from "./components/Client/ProjectSettings";
import ProjectWl from "./components/Client/ProjectWL";
import SetUp from "./pages/FounderSetUp/SetUp";
import ProjectsName from "./pages/FounderSetUp/ProjectsName";
import ProjectsImage from "./pages/FounderSetUp/ProjectsImage";
import ProjectSocials from "./pages/FounderSetUp/ProjectSocials";
import ProjectTemplate from "./pages/FounderSetUp/ProjectTemplate";
import MintDetails from "./pages/FounderSetUp/MintDetails";
import EntryRequirements from "./pages/FounderSetUp/EntryRequirements";
import DiscordWinner from "./pages/FounderSetUp/DiscordWinner";
import ProjectEnd from "./pages/FounderSetUp/ProjectEnd";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" exact />

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
          <Route element={<CollabStat />} path="/CollabStats" />
          <Route element={<CollabSheet />} path="/CollabSheet" />
          <Route element={<DiscordStat />} path="/DiscordStats" />
          <Route element={<ProjectSettings />} path="/ProjectSettings" />
          <Route element={<ProjectWl />} path="/ProjectWL" />
          <Route element={<AdminCollabs />} path="/AdminCollabs" />
          {/* Admin routes need to protection */}
          <Route element={<PrivateRoutes />}>
            <Route element={<AdminDashboard />} path="/AdminDashboard" />
          </Route>
          <Route element={<PrivateRoutes />}>
            {" "}
            <Route element={<AdminProjects />} path="/AdminProjects" />
          </Route>
          <Route element={<PrivateRoutes />}> </Route>
          <Route element={<PrivateRoutes />}>
            {" "}
            <Route element={<AdminAccount />} path="/AdminAccount" />
          </Route>

          <Route element={<AdminLogin />} path="/Admin" />
          {/* <Route element={<ProjectSettings />} path="/ProjectSettings" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
