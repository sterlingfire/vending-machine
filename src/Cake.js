import { Link } from 'react-router-dom';

/**Cake Component
 * 
 * Props: none
 * 
 * State: none
 * 
 * App -> Router -> Cake
 *  */
function Cake() {
  return (
    <div>
      <h2>NOM NOM NOM NOM NOM NOM NOM</h2>
      <Link to="/">Go Back</Link>
      <div>
        <img
          alt="Cake"
          src="https://www.cookingclassy.com/wp-content/uploads/2019/07/birthday-cake-4.jpg"
          width="200"
          height="200"></img>
      </div>
    </div>
  );

}

export default Cake;