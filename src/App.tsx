import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import LinkedList from './pages/linkedList'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linked-list" element={<LinkedList />} />
          {/* <Route path="/tree" element={<Tree />} /> */}
          {/* <Route path="/stack" element={<Stack />} /> */}
          {/* <Route path="/queue" element={<Queue />} /> */}
          {/* <Route path="/hash" element={<Hash />} /> */}
        </Routes>
    </Router>
  )
}

export default App
