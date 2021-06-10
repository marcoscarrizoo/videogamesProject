import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getVideogames } from '../redux/actions'
import VideoGames from './videogames/Cards'
//import {makeStyles} from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import './home.css'

function Home() {
//const classes = useStyles()
const dispatch = useDispatch()
const games = useSelector(store=> store.videogames)

useEffect(() => {
    dispatch(getVideogames())
    },[dispatch])
    
 
        

if(!games) {
    return <div className='spinner'>loading</div>
}

return (
       <Container>
           
                {games.map( e => 
            <Grid item xs={12} md={6} lg={4}>
                <VideoGames 
                id ={e.id}
                name ={e.name}
                image ={e.img}
                genres ={e.genres}
                />
            </Grid>
                )}
            
        </Container>
    )
}

export default Home