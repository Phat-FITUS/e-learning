import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

function Footer() {
  return (
    <Box sx = {{
      backgroundColor: '#9BBEC8',
      width: '100%',
      minHeight: (theme) => (theme.elearningCustom.mainpageFooterHeight),
      maxHeight: (theme) => (theme.elearningCustom.mainpageFooterHeight),
      display: 'flex',
      justifyContent: 'center',
      gap: 1,
      alignItems: 'center',
      overflowX: 'auto',
      overflowY: 'hidden'
    }}>
      <Typography>
        <Box sx = {{
          fontWeight: 900,
          lineHeight: '30px',
          color: '#164863',
          fontSize: '20px'
        }}>
          E-Learning MERN STACK
        </Box>
        <Box sx = {{
          lineHeight: '24px',
          color: '#164863',
          fontSize: '20px'
        }}>
          FE: Mai Khang (Moka) <br/>
          BE: Lê Tấn Phát
        </Box>
      </Typography>
    </Box>
  )
}

export default Footer