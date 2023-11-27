import Box from '@mui/material/Box'
import Footer from '../../../../components/Footer'
import SideBar from '../../../../components/SideBar'

import GridCourse from './GridCourse'
function MainContent() {
  return (
    <Box sx = {{
      backgroundColor: 'white',
      width: '100vw',
      height: (theme) => (`calc(100vh -
        ${theme.elearningCustom.mainpageHeaderHeight}
        )`),
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      alignItems: 'center',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <Box sx = {{
        display: 'flex'
      }}>
        <SideBar />
        <Box sx= {{ width: (theme) => (`calc(100vw - ${theme.elearningCustom.sideBarHeight})`) }}>
          <GridCourse />
          <GridCourse />
        </Box>
      </Box>

      <Footer />
    </Box>
  )
}

export default MainContent