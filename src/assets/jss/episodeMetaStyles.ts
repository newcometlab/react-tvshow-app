import { Theme } from '@mui/system'

const showMetaStyles = (theme: Theme) => ({
  wrapper: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  imageWrapper: {
    padding: '0.5rem',
    minWidth: '300px',
    [theme.breakpoints.down('lg')]: {
      minWidth: 'unset',
      width: '33%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 'unset',
      width: '100%',
    },
  },
  contentWrapper: {
    flexGrow: 1,
    [theme.breakpoints.down('lg')]: {
      flexGrow: 'unset',
      width: '67%',
    },
    [theme.breakpoints.down('sm')]: {
      flexGrow: 'unset',
      width: '100%',
    },
  },
  btnGroupWrapper: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'right',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  content: {
    '&.MuiTypography-root': {
      padding: '0.5rem',
      fontSize: '1.2rem',
    },
  },
})

export default showMetaStyles
