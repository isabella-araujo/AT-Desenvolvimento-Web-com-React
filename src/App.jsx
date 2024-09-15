import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom'
import './App.css'
import Questao1_1 from './questoes/Questao1_1'
import Questao1_2 from './questoes/Questao1_2'
import Questao1_3 from './questoes/Questao1_3'
import Questao1_4 from './questoes/Questao1_4'
import Questao2_1 from './questoes/Questao2_1'
import Questao2_2 from './questoes/Questao2_2'
import Questao2_3 from './questoes/Questao2_3'
import Questao2_4 from './questoes/Questao2_4'
import Questao3_1 from './questoes/Questao3_1'
import Questao3_2 from './questoes/Questao3_2'
import Questao3_3 from './questoes/Questao3_3'
import Questao3_4 from './questoes/Questao3_4'
import Questao4_1 from './questoes/Questao4_1'

function App() {
  return (
    <div>
      <Router>
        <Questao4_1 />
        <Routes>
          <Route path='/questao1_1' element={<Questao1_1/>} />
          <Route path='/questao1_2' element={<Questao1_2/>} />
          <Route path='/questao1_3' element={<Questao1_3/>} />
          <Route path='/questao1_4' element={<Questao1_4/>} />
          <Route path='/questao2_1' element={<Questao2_1 />} />
          <Route path='/questao2_2' element={<Questao2_2/>} />
          <Route path='/questao2_3' element={<Questao2_3/>} />
          <Route path='/questao2_4' element={<Questao2_4/>} />
          <Route path='/questao3_1' element={<Questao3_1/>} />
          <Route path='/questao3_2' element={<Questao3_2/>} />
          <Route path='/questao3_3' element={<Questao3_3/>} />
          <Route path='/questao3_4' element={<Questao3_4/>} />
          <Route path='/admin/:adminState' element={<Questao2_1 />} />
          <Route path='/:brasilState' element={<Questao2_2 />} />
          <Route path='/formulario/:formState' element={<Questao3_1 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
