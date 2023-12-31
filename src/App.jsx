import Calendar from './pages/Calendar'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
