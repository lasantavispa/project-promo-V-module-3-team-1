import { Route, Routes } from "react-router-dom";
import ListProject from "./listProject/ListProject.jsx";
import AppCard from "./cardProject/AppCard.jsx";
import Landing from "./landing/Landing.jsx";



function App() {

  return (
      <Routes>
        <Route path="/listproyect" element={<Landing />} />
        <Route path="/newproject" element={<ListProject formData={formData} avatar={avatar} userPhoto={userPhoto} />}/>
        <Route path="/" element={<AppCard />}/>
      </Routes>

  );
}

export default App;
