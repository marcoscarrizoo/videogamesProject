const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const fetch = require('node-fetch')
const {default:axios} = require('axios')
//const {v4:uuidv4} = require('uuid')
//const {conn} = require('../db')
//const {Pokemon,Type} = conn.models


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET /videogames:
//Obtener un listado de los primeras 15 videojuegos
//Debe devolver solo los datos necesarios para la ruta principal

router.get('/videogames', async (req, res) => {
let games = []
      try{
          for(var i = 1 ; i <=5 ; i++) {
          var api = await axios.get('https://api.rawg.io/api/games?key=9e9ca1c80d974269a87013f79911dcee&page=' + i)
          games = games.concat(api.data.results)
          
      }
      const info = games.map(e => 
        videogames = {
            id: e.id,
            name: e.name,
            img: e.background_image,
            genres: e.genres.map(e => e.name)
        })
      return res.json(info)
      }
      catch{
          return res.send('no se ha encontrado videojuegos')
      }
  })
  


//GET /videogames?name="...":
//Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
//Si no existe ningún videojuego mostrar un mensaje adecuado

router.get('/videogame', async(req,res) => {
  let game = []
  const {name} = req.query
  console.log(name)
  if(name) { //hasta aca 
      try{
          for(var i = 1 ; i <=5 ; i++) {
              var api = await axios.get('https://api.rawg.io/api/games?key=9e9ca1c80d974269a87013f79911dcee&page=' + i)
          game = game.concat(api.data.results).map(e => e.name)
          } let videogame = game.filter(e => e.name === name)
          return res.json(videogame)
      }catch {
          return res.send('no hay videojuego')
      }
  } 
})

//GET /videogame/{idVideogame}:
//Obtener el detalle de un videojuego en particular
//Debe traer solo los datos pedidos en la ruta de detalle de videojuego
//Incluir los géneros asociados
router.get('/detail/:id', async (req, res) => {
  let detail = []
  const {id} = req.params
  
      const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=9e9ca1c80d974269a87013f79911dcee`)
      detail = detail.concat(game.data)
    detail.map
      
    return res.json(detail)
        

})


//GET /genres:
//Obtener todos los tipos de géneros de videojuegos posibles
//En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí



//POST /videogame:
//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body//
//Crea un videojuego en la base de datos

module.exports = router;
