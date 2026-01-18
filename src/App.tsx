import { useState } from 'react';
import './App.css';
import FlatmateTag from './components/FlatmateTag/FlatmateTag';
import Formular from './components/Formular/Formular';
import type Flatmate from './types';

const App = () => {
  const [flatmates, setFlatmates] = useState<Flatmate[]>([]);

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

  return (
    <div className="content">
      <Formular addFlatmates={addFlatmates} flatmates={flatmates} />
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
    </div>
  );
};

export default App;
