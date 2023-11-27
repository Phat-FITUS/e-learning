import Container from '@mui/material/Container'
import Header from './Header'
import MainContents from './MainContents'
import SlideShow from './MainContents/MainContent/SlideShow'
function MainPage() {
  return (
    <Container disableGutters maxWidth={false} sx = {{ height: '100vh' }}>
      <Header />
      <SlideShow />
      <MainContents />
    </Container>
  )
}
export default MainPage