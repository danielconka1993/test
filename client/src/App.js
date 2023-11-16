import { BrowserRouter, Routes, Route} from "react-router-dom"
import SharedLayout from "./components/zakladniStruktura/SharedLayout"
import Main from "./pages/Main"
import ChciNabidku from "./pages/ChciNabidku"
import VypisNabidek from "./pages/VypisNabidek"
import Error from "./pages/Error"

const App = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="/chci-nabidku" element={<ChciNabidku />} />
          <Route path="/vypis-nabidek" element={<VypisNabidek />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App