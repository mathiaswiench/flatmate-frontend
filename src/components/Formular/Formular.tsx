import { useState } from 'react';
import type Flatmate from '../../types';
import './Formular.css';

interface FormularProps {
  addFlatmates: (flatmate: Flatmate) => void;
  flatmates: Flatmate[];
}

const Formular = ({ addFlatmates, flatmates }: FormularProps) => {
  const [name, setName] = useState('');
  const [expenditure, setExpenditure] = useState(0.0);
  const [daysAbsent, setDaysAbsent] = useState(0);

  const onAddFlatmate = (e) => {
    console.log(e);
    e.preventDefault();
    const flatmate: Flatmate = {
      name: name,
      expenditure: expenditure,
      daysAbsent: daysAbsent,
    };
    console.log(flatmate);
    addFlatmates(flatmate);
  };

  return (
    <div className="form-container">
      <form>
        <input
          className="form-field"
          type="text"
          id="name"
          placeholder="Name ..."
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          className="form-field"
          id="expenditure"
          step="0.01"
          placeholder="Ausgaben ..."
          required
          onChange={(e) => setExpenditure(Number(e.target.value))}
        />

        <input
          type="number"
          className="form-field"
          id="days_absent"
          min="0"
          placeholder="Tage abwesend ..."
          onChange={(e) => setDaysAbsent(Number(e.target.value))}
          required
        />
        <div className="button-box">
          <button
            className="submit-button"
            style={{ backgroundColor: 'blue' }}
            type="submit"
            onClick={(e) => onAddFlatmate(e)}
          >
            Hinzufügen
          </button>
          {flatmates.length >= 2 && (
            <button
              className="submit-button"
              style={{ backgroundColor: 'red' }}
              type="submit"
            >
              Abrechnen
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Formular;
