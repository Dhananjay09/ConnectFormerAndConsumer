import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'
import { dark } from '@material-ui/core/styles/createPalette'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#12a7b8',
      main: '#019688',
      dark: '#90675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c11800',
      contrastText: '#000',
    },
      openTitle: teal['700'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  