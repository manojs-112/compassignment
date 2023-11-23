
import React from 'react';
import Pxslider from './components/Pxslider';
import './App.css';

const App = () => {

  
  const images = [
    "https://img.freepik.com/premium-vector/river-morning-sunrise-afternoon-sunset-mountain-forest-rural-landscape-illustration_7081-1705.jpg?w=740",
    "https://img.freepik.com/free-vector/night-landscape-with-mountains-river-road_107791-12155.jpg?w=826&t=st=1700588519~exp=1700589119~hmac=d9f9dbf339a7ef823e2acb13283a7f2d37ec0e39322f80f37952c1628b19b6e6",
    "https://img.freepik.com/free-vector/cartoon-nature-landscape-with-mountain-forest-deciduous-trees-trunks-clearance_107791-3706.jpg?w=996&t=st=1700587938~exp=1700588538~hmac=36236d54ac4279cbbb7a4510daaa795bc849f56932da606b10fad50919782d82",
  ];

  return (
    <div className="App">
      <h1>React Parallax Slider</h1>
      <Pxslider images={images} parallaxIntensity={0.5} transitionSpeed={0.5} />
    </div>
  );
};

export default App;
