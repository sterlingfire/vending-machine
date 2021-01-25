import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/* Chips Component
 * Props:
 * - chipsChoices: [{text, src, key}, ...]
 * State: none
 * App -> Router -> {Vending Machine, Chips, Tea, Cake}
 */
const defaultChipsChoices = [
  {
    text: "Chips",
    src: "https://www.themycenaean.org/wp-content/uploads/2010/10/sunchips1.jpg",
  },
  {
    text: "More Chips",
    src: "https://www.startupguys.net/wp-content/uploads/2014/05/fish-chips.jpg",
  },
  {
    text: "Chips?",
    src: "https://tvguide1.cbsistatic.com/feed/1/987/thumbs/12975987_1056x1408.jpg",
  }
];

function Chips({ chipsChoices = defaultChipsChoices }) {
  const [nextIndex, setNextIndex] = useState(0);
  const [choices, setChoices] = useState([]);

  /* Updates nextIndex to select next chip from chipsChoices */
  function vendChips() {
    (nextIndex >= chipsChoices.length - 1) ? setNextIndex(0) : setNextIndex(() => nextIndex + 1);
    let newChip = {...chipsChoices[nextIndex], key: uuid()}
    setChoices(() => [...choices, newChip]);

    return chipsChoices[nextIndex];
  }

  const chipsImages = choices.map(chip => (
    <img
      key={chip.key}
      alt={chip.text}
      src={chip.src}
      width="200"
      height="200"></img>));

  return (
    <div className="Chips">
      <div className="Chips-selected">
        <p>You have selected chips!</p>
      </div>
      <div className="Chips-display">
        <div>
          <button className="btn btn-primary" onClick={vendChips}>NOM NOM NOM</button>
        </div>
        <Link to="/">Go Back</Link>
        <h2>Chips consumed: {choices.length}</h2>
        <div>
          {chipsImages}
        </div>
      </div>
    </div>);
}

export default Chips;
