import { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'

function SearchingComponent() {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const handleInputFocus = () => { setIsHighlighted(true) }

  const handleInputBlur = () => { setIsHighlighted(false)}

  return (
    <Box sx = {{
      width: '40%',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      p: 1.5
    }}>
      <Paper
        component="form"
        variant = 'outlined'
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '64px',
          p: 1,
          width: '400px',
          backgroundColor: 'white',
          boxShadow: isHighlighted ? '0px 0px 5px 2px black' : 'none'
        }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon sx = {{ fontSize: 32, color: '#CCCCCC' }}/>
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: '#666666',
            fontWeight: 'bold'
          }}
          placeholder="Tìm kiếm khóa học, bài viết"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </Paper>
    </Box>
  )
}

export default SearchingComponent