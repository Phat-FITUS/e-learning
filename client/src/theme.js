import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
const MAINPAGE_HEADER_ELEMENT_HEIGHT = '34px'
const MAINPAGE_HEADER_HEIGHT = '66px'
const MAINPAGE_FOOTER_HEIGHT = '100px'

const theme = extendTheme({
  typography: {
    'fontFamily': 'Montserrat'
  },
  elearningCustom: {
    mainpageHeaderElementHeight: MAINPAGE_HEADER_ELEMENT_HEIGHT,
    mainpageHeaderHeight: MAINPAGE_HEADER_HEIGHT,
    mainpageFooterHeight: MAINPAGE_FOOTER_HEIGHT
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          color: 'white'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px'
        }
      }
    }
  }

})

export default theme