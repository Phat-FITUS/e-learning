import ELearningComponent from '../ElearningLogo'
import SearchingComponent from './FeatureBar/Searching'
import SignInComponent from './FeatureBar/SignIn'
import Box from '@mui/material/Box'

function AppBar() {
  return (
    <Box sx = {{
      backgroundColor: '#9BBEC8',
      width: '100%',
      height: (theme) => (theme.elearningCustom.mainpageHeaderHeight),
      display: 'flex',
      justifyContent: 'space-between',
      gap: 1,
      alignItems: 'center',
      overflowX: 'auto',
      overflowY: 'hidden'
    }}>
      <ELearningComponent />
      <SearchingComponent />
      <SignInComponent />


    </Box>
  )
}

export default AppBar