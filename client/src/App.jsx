import Container from '@mui/material/Container'
import Header from './pages/MainPage/Header'

function App() {
  return (
    <Container disableGutters maxWidth={false} sx = {{ height: '100vh' }}>
      <Header />
    </Container>
  )
}

export default App
