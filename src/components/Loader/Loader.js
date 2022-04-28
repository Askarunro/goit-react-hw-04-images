import { Grid } from  'react-loader-spinner'
import l from './Loader.module.css'

export default function Loader(){
 return(
    <Grid
    margin="0 auto"
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
 )
}