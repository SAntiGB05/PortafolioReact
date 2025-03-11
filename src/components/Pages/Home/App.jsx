import { Routes, Route } from 'react-router-dom'
import { Container } from '../../Container/Container'
import { Header } from '../../Layouts/Header/Header'

function App() {
  return (
    <>
    <Header />
    <Container>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/InterpersonalSkills' element = {<TechnicalSkills />}></Route>
        <Route path='/TechnicalSkills' element = {<InterpersonalSkills />}></Route>
        <Route path='/Experience' element = {<Experience />}></Route>
        <Route path='*' element = {<NotFount />}></Route>
      </Routes>
    </Container>
    
    </>
  )
}

export default App
