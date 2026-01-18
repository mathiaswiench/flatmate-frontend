import { useState } from 'react';
import type Flatmate from '../../types';
import './Formular.css';
import { calculateSettlement } from '../../api/calculateSettlement';

interface FormularProps {
  addFlatmates: (flatmate: Flatmate) => void;
  flatmates: Flatmate[];
}

const Formular = ({ addFlatmates, flatmates }: FormularProps) => {
  const [flatmate, setFlatmate] = useState<Flatmate>({
    name: '',
    expenditure: undefined,
    daysAbsent: undefined,
  });
  const [totalDays, setTotalDays] = useState<number>();
  const [showForm, setShowForm] = useState(false);

  const onAddFlatmate = (e) => {
    console.log(e);
    e.preventDefault();
    addFlatmates(flatmate);
    const resetFlatmate = {
      name: '',
      expenditure: undefined,
      daysAbsent: undefined,
    };
    setFlatmate(resetFlatmate);
  };

  const onCalculateSettlement = async (e, totalDays: number) => {
    e.preventDefault();
    const response = await calculateSettlement(flatmates, totalDays);
    console.log(response);
  };

  return (
    <div className="form-container">
      <form id="settlementForm">
        {!showForm && (
          <input
            type="number"
            className="form-field"
            id="total_days"
            step="0.01"
            value={totalDays}
            placeholder="Tage im Monat ..."
            required
            onChange={(e) => setTotalDays(Number(e.target.value))}
          />
        )}
        {showForm && (
          <>
            <input
              className="form-field"
              type="text"
              id="name"
              placeholder="Name ..."
              value={flatmate.name}
              required
              onChange={(e) =>
                setFlatmate({ ...flatmate, name: e.target.value })
              }
            />
            <input
              type="number"
              className="form-field"
              id="expenditure"
              min="0"
              value={flatmate.expenditure ?? ''}
              placeholder="Ausgaben ..."
              onChange={(e) =>
                setFlatmate({
                  ...flatmate,
                  expenditure: Number(e.target.value),
                })
              }
              required
            />{' '}
            <input
              type="number"
              className="form-field"
              id="days_absent"
              value={flatmate.daysAbsent ?? ''}
              min="0"
              placeholder="Tage abwesend ..."
              onChange={(e) =>
                setFlatmate({ ...flatmate, daysAbsent: Number(e.target.value) })
              }
              required
            />
          </>
        )}
        <div className="button-box">
          <button
            className="submit-button"
            style={{ backgroundColor: 'blue' }}
            type="submit"
            onClick={(e) => (showForm ? onAddFlatmate(e) : setShowForm(true))}
          >
            {showForm ? 'Hinzufügen' : 'Weiter'}
          </button>
          {flatmates.length >= 2 && (
            <button
              className="submit-button"
              style={{ backgroundColor: 'red' }}
              type="submit"
              onClick={(e) => onCalculateSettlement(e, totalDays)}
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
