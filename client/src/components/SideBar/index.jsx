
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import FeedIcon from '@mui/icons-material/Feed'
function SideBar() {
  const buttonStyle = {
    width: '100%',
    height: '80px',
    color: '#164863',
    fontSize: '12px',
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': { backgroundColor: '#9BBEC8' }
  }
  return (
    <Box sx = {{
      paddingTop: 15,
      width: (theme) => `calc(${theme.elearningCustom.sideBarHeight} + 16px)`,
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'center', paddingLeft: 2
    }}>
      <Stack direction="column" sx = {{
        backgroundColor: '#DDF2FD',
        borderRadius: '64px',
        width: (theme) => {theme.elearningCustom.sideBarHeight},
        position: 'fixed'
      }}>
        <Button sx = {{ ...buttonStyle, borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}>
          <HomeIcon fontSize='large'/>
          Trang chủ
        </Button>
        <Button sx = {{ ...buttonStyle }}>
          <MenuBookIcon fontSize='large'/>
          Khóa học
        </Button>
        <Button sx = {{ ...buttonStyle, borderBottomLeftRadius: '64px', borderBottomRightRadius: '64px' }}>
          <FeedIcon fontSize='large'/>
          Bài viết
        </Button>

      </Stack>

    </Box>
  )
}

export default SideBar