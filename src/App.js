import { Route, Routes } from "react-router-dom";
import { HomePage } from "./routes/home";
import { RoomPage } from "./routes/room";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:id" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
