import {Link} from 'react-router-dom';
import {useState} from 'react';
/* Chips Component
 * Props: none
 * State: none
 * App -> Router -> {Vending Machine, Chips, Tea, Cake}
 */
const defaultChipsChoices = [<img alt="Chips" src="https://www.themycenaean.org/wp-content/uploads/2010/10/sunchips1.jpg"></img>,
<img alt="More Chips" src="https://www.startupguys.net/wp-content/uploads/2014/05/fish-chips.jpg"></img>,
<img alt="Chips?" src="https://tvguide1.cbsistatic.com/feed/1/987/thumbs/12975987_1056x1408.jpg"></img>]

function Chips({chipsChoices=defaultChipsChoices}){
  const [nextIndex, setNextIndex] = useState(0);
  const [choices, setChoices] = useState();

  function vendChips(){
    (nextIndex >= chipsChoices.length-1) ?  setNextIndex(0) : setNextIndex(() => nextIndex+1);
    setChoices( () => [...choices, chipsChoices[nextIndex]]);
    return chipsChoices[nextIndex];
  }
  return (
    <div>
      <div>
        <p>You have selected chips!</p>
      </div>
      <div>
        <button onClick={vendChips}>NOM NOM NOM</button>

      </div>
    </div>);
}

export default Chips;
