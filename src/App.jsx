import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FingerVolume from "./pages/FingerVolume";
import TrafficSign from "./pages/TrafficSign";
import FitnessCoach from "./pages/FitnessCoach";
import TalentOnDemand from "./pages/TalentOnDemand";
import KnowledgeManagement from "./pages/KnowledgeManagement";
import TogetherCareEpic from "./pages/TogetherCareEpic";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
  path="/projects/finger-volume-control"
  element={<FingerVolume />}
/>

        <Route
          path="/projects/traffic-sign-recognition"
          element={<TrafficSign />}
        />

        <Route
          path="/projects/fitness-coach-ai"
          element={<FitnessCoach />}
        />

        <Route
          path="/projects/talent-on-demand"
          element={<TalentOnDemand />}
        />
        <Route
  path="/projects/knowledge-management"
  element={<KnowledgeManagement />}
/>

<Route
  path="/projects/togethercare-epic"
  element={<TogetherCareEpic />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;