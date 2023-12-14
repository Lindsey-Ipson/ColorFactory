import React, { useState } from "react";
import { Link } from "react-router-dom";
import {v1 as uuid} from "uuid";
import "./ColorList.css";

const ColorList = () => {
  const [colors, setColors] = useState([{'red': 255, 'green': 0, 'blue': 0}, {'green': 0, 'green': 255, 'blue': 0}, {'blue': 0, 'green': 0, 'blue': 255}]);


  return (
    <div className="ColorList">
      <h1>Welcome to the color factory</h1>
      <Link to="/colors/new">Add a color</Link>
      
    </div>
  );
}


// const DogList = ({ dogs }) => {
//   return (
//     <div className='DogList'>
//       <h1>Meet the dogs!</h1>
//       {dogs.map(dog => (
//         <div className="DogList-dog-container" key={uuid()}>
//           <img src={dog.src} alt={dog.name} />
//           <div className="DogList-name">
//             <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// };

export default DogList;