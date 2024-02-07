
import {BrowserRouter as Routes, Route } from "react-router-dom";
import ListProject from "../listProject/ListProject.jsx";
import AppCard from "../cardProject/AppCard.jsx";
import Landing from "../landing/Landing.jsx";



function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route
        path="/listproject"
        element={
          <ListProject
            formData={formData}
            avatar={avatar}
            userPhoto={userPhoto}
          />
        }
      />
      <Route path="/appcard" element={<AppCard />} />
    </Routes>
  );
}

export default App;
