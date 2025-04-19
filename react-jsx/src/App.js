import React from 'react'
import './App.css';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpeg'

function App() {
const pets = [{
name : "Nancy",
type : 'Golden Retriever',
description : 'Best friend of me, Good girl',
skills : ['fetch','play','roll-over'],
image : image1
  },

{
name : "Johny",
type : 'Hatchie',
description : 'Best friend of me, Good girl',
skills : ['bark','protect','play'],
image : image2
},
];
  return (
    <div className="App">
     <h1 className ="Pets">My Pets</h1>
     <ul className="container">  
        {
          pets.map((pet, index) => (
            <li key={index}>
              <h1>{pet.name}</h1>
              <p>{pet.description}</p>
              <img src={pet.image} alt={pet.name} width="300px" height="200px"/>
              <ul className='skills'>
                {
                  pet.skills.map((skill,index) => (
                    <li key ={skill}>{skill}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
     </ul>
      
</div>
  );
}
export default App;
