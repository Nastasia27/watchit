import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppbar';
import FilmCard from './components/ResponsiveAppBar/FilmCard/FilmCard';
import { Grid } from '@mui/material';

const mockData = [
  {
    id: 1,
    name: "Home Alone",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/0/03/Home_Alone_dvd_rus.jpg",
    time: "1hr: 50mins",
  },
  {
    id: 2,
    name: "Black Adam",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/9/9f/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%90%D0%B4%D0%B0%D0%BC%C2%BB.jpg",
    time: "2hr: 10mins",
  },
  {
    id: 3,
    name: "Back to the Future",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
    time: "2hr: 50mins",
  },
  {
    id: 4,
    name: "Avengers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    time: "2hr:30mins",
  },
];

function App() {
  const handleCardClick = (id) => {
    console.log("ID:", id)
  }
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
      {mockData.map(({id, name, time, image}) =>  (
        <Grid item xs={3} key={id}>
          <FilmCard
            id={id}
            name={name}
            time={time}
            image={image}
            eventClick={handleCardClick}
           />
        </Grid>
      ))}
      </Grid>
      
    </div>

  );
}

export default App;
