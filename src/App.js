import NavigationBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Card, Button} from 'react-bootstrap'
import Country from './components/countries'
import Service from './components/cards'
import Experience from './components/cards2'
import Footer from './components/footer'
import './App.css';

const cities = [
  {src:'imgs/tunis.webp', name:"Tunis"},
  {src:'imgs/marsa.jpg', name:"Marsa"},
  {src:'imgs/kelibia.webp', name:"Kelibia"},
  {src:'imgs/hamammet.jpg', name:"Yasmine Hammamet"},
  {src:'imgs/hamamet-sud.webp', name:"Hammamet Sud"},
  {src:'imgs/hergla.jpg', name:"Hergla"},
  {src:'imgs/korba.webp', name:"Korba"},
  {src:'imgs/aghir.jpg', name:"Aghir"},
]


const service = [
  {src:'imgs/house.webp', title:'Escapades en pleine nature'},
  {src:'imgs/sea.webp', title:'Des logements uniques'},
  {src:'imgs/nature.webp', title:'Logements entiers'},
  {src:'imgs/animals.webp', title:'Animaux de compagnie acceptés',},
]

const experience = [
  {src:'imgs/exp1.webp', title:'Collection à la une: Envies d\'évasion', parag:'Voyagez depuis chez vous grace aux expériences en ligne'},
  {src:'imgs/exp2.webp', title:'Expériences en ligne', parag:'Activités interactives, animés par des hotels'},
  {src:'imgs/exp3.webp', title:'Expériences', parag:'Perenz part à des activités locales, ou que vous soyez.'},
]

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <span className="explore container ">Explorez les environs</span>
      <Container className="d-flex flex-wrap">
         <Country city={cities}/>
      </Container>
      <span className="explore container ">Chez vous, partout</span>
      <Container>
          <div className="d-flex py-3">
              <Service services={service}/>
          </div>
      </Container>

  
        <Container>
           <div>
            <Card className="detail bg-dark text-white">
                <Card.Img className="detail" src="imgs/detail.webp" alt="Card image" />
             
                      <Card.ImgOverlay className="mt-5 ml-3">
                        <Card.Title><span className="explore">Devenez hôte</span></Card.Title>
                        <Card.Text className="description">
                          Gagnez un revenu complémentaire et saisissez <br/> de nouvelles opportunités en louant votre logement.
                        </Card.Text>
                         <Button className="buton" variant="primary">En savoir plus</Button>
                      </Card.ImgOverlay>
                
              </Card>
           </div>
        </Container>
 
        <Container className="py-5">
        <div>
          <span className="explore container">Découvrez les expériences</span>
          <p class="parag">Des activités uniques avec des experts locaux, en personne ou en ligne.</p>
        </div>
          <div className="d-flex">
          <Experience experiences={experience}/>
          </div>
        </Container>

        <Container>
          <Footer />
        </Container>
    </div>
  );
}

export default App;
