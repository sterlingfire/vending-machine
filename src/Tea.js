import { Link } from 'react-router-dom';

/**Cake Component
 * 
 * Props: none
 * 
 * State: none
 * 
 * App -> Router -> Tea
 *  */
function Tea() {
  return (
    <div>
      <h2>OMGGG CAFEEEEIIINNNNNNEEEEEEE</h2>
      <Link to="/">Go Back</Link>
      <div>
        <img
          alt="Matcha"
          src="https://cdn.loveandlemons.com/wp-content/uploads/2020/04/matcha.jpg"
          width="200"
          height="200"></img>
      </div>
    </div>
  );

}

export default Tea;