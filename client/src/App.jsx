import Container from '@mui/material/Container'
import MainPage from './pages/MainPage/_id'

function App() {
  return (
    <Container disableGutters maxWidth={false} sx = {{ height: '100vh' }}>
      <MainPage />
    </Container>
  )
}

export default App
