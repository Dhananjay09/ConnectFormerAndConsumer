import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'
import { dark } from '@material-ui/core/styles/createPalette'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#12a7bf',
      main: '#019688',
      dark: '#90675b',
      contrastText: '#123231',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c11800',
      contrastText: '#0ff',
    },
      openTitle: teal['700'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  