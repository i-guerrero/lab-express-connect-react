import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LogsIndex from "./Components/LogsIndex";
import LogDetails from "./Components/LogDetails";
import NewLogForm from "./Components/NewLogForm";
import EditLogForm from "./Components/EditLogForm";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<LogsIndex />} />
            <Route path="/logs/:index" element={<LogDetails />} />
            <Route path="/logs/new" element={<NewLogForm />} />
            <Route path="/logs/:index/edit" element={<EditLogForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
