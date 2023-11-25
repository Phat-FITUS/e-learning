import elearningLogo from '../../assets/Logo.svg'

import Box from '@mui/material/Box'

function ELearningComponent() {
  return (
    <Box sx = {{
      width: '30%',
      height: '100%',
      p: 1
    }}
    >
      <img
        src={elearningLogo}
        className="elearning-logo"
        alt="Elearning-Logo"
        style={{
          width: 50,
          height: 50,
          borderRadius: '5px'
        }}
      />
    </Box>
  )
}
export default ELearningComponent