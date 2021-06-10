import { createMuiTheme } from '@material-ui/core/styles'
import {blue} from '@material-ui/core/colors'

const theme = createMuiTheme({
//aca colocamos las cosas personalizadas
palette: {
    primary: {
        main: blue[600]
    }
}
})

export default theme;