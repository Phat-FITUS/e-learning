import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const buttonStyles = {
  width: '142px',
  height: (theme) => theme.elearningCustom.mainpageHeaderElementHeight,
  color: 'white',
  borderRadius: '64px',
  textTransform: 'none'
}

function SignInComponent() {
  return (
    <Box
      sx={{
        backgroundColor: '#9BBEC8',
        width: '30%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 1.5
      }}
    >
      <Box
        sx={{
          minWidth: '250px',
          marginLeft: 'auto',
          justifyContent: 'flex-end',
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <Button sx={{ ...buttonStyles }} variant="text">
          Đăng Nhập
        </Button>
        <Button
          sx={{
            ...buttonStyles,
            backgroundColor: '#427D9D'
          }}
          variant="contained"
        >
          Đăng ký
        </Button>
      </Box>
    </Box>
  )
}

export default SignInComponent
