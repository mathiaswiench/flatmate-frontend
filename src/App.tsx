import { useState } from 'react';
import './App.css';
import FlatmateTag from './components/FlatmateTag/FlatmateTag';
import Formular from './components/Formular/Formular';
import type Flatmate from './types';
import { ModalSettlement } from './components/ModalSettlement/ModalSettlement';
import type { Settlement } from './types';

const App = () => {
  const [flatmates, setFlatmates] = useState<Flatmate[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [settlements, setSettlements] = useState<Settlement[]>([]);

  const addFlatmates = (flatmate: Flatmate) => {
    console.log(flatmates);
    setFlatmates([
      ...flatmates,
      {
        name: flatmate.name,
        expenditure: flatmate.expenditure,
        daysAbsent: flatmate.daysAbsent,
      },
    ]);
  };

  const handleSettlementsCalculation = (settlements: Settlement[]) => {
    setSettlements(settlements);
    setModalIsOpen(true);
  };

  return (
    <div className="content">
      <Formular
        addFlatmates={addFlatmates}
        flatmates={flatmates}
        setSettlements={(newSettlements) =>
          handleSettlementsCalculation(newSettlements)
        }
      />
      <div className="flatmate-container">
        {flatmates.map((flatmate, index) => (
          <FlatmateTag
            flatmate={{
              name: flatmate.name,
              expenditure: flatmate.expenditure,
              daysAbsent: flatmate.daysAbsent,
            }}
            index={index}
          />
        ))}
      </div>
      <ModalSettlement
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        settlements={settlements}
      />
    </div>
  );
};

export default App;
