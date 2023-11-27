import Container from '@mui/material/Container'
import Header from './Header'
import MainContents from './MainContents'
function MainPage() {
  return (
    <Container disableGutters maxWidth={false} sx = {{ height: '100vh' }}>
      <Header />
      <MainContents />
    </Container>
  )
}
export default MainPage