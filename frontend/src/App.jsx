import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Experience from './pages/Experience'
import Research from './pages/Research'
import News from './pages/News'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Layout from './layout/Layout'

function App() {
  return (
        <BrowserRouter>
            
          <Routes>
            <Route path="/" element={<Layout> <Home /> </Layout>} />
            <Route path="/experience" element={<Layout> <Experience /> </Layout>} />
            <Route path="/research" element={<Layout> <Research /> </Layout> } />
            <Route path="/news" element={<Layout> <News /> </Layout>} />
            <Route path="/projects" element={<Layout> <Projects /> </Layout>  } />
            <Route path="/resume" element={<Layout> <Resume /> </Layout>  } />
          </Routes>
        </BrowserRouter>
  )
}

export default App