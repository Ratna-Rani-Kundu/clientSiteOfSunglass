import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

// const message = `Truncation should be conditionally applicable on this long line of text
//  as this is a much longer line than what the container can support. `;

export default function Review() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
    <Paper elevation={0} />
    <Paper />
    <Paper elevation={3} />
  </Box>
  );
}
