import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<DashboardPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
