import Box from '@mui/material/Box'

import MainContent from './MainContent'
function MainContents() {
  return (
    <Box sx = {{
      backgroundColor: '#ffffff',
      width: '100%',
      height: (theme) => (`calc(100vh -
         ${theme.elearningCustom.mainpageHeaderHeight}
         )`),
      display: 'flex',
      justifyContent: 'space-between',
      gap: 1,
      alignItems: 'center',
      overflowY: 'auto'
    }}>
      <MainContent />
    </Box>
  )
}

export default MainContents