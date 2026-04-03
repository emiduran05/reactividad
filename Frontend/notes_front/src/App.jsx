
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Userselection from "./components/userSelection/Userselection.jsx";
import Whatsapp from "./components/whatsApp/Whatsapp.jsx";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userselection />} />
        <Route path="/whatsapp/:user" element={<Whatsapp />}/>
      </Routes>
    </BrowserRouter>
  );
}
