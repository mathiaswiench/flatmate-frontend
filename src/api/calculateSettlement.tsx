import type { Settlement } from '../types';
import type Flatmate from '../types';

export const calculateSettlement = async (
  flamates: Flatmate[],
  totalDays: number,
): Promise<Settlement[]> => {
  const response = await fetch('http://localhost:8080/settlement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      totalDays: totalDays,
      flatmates: flamates,
    }),
  });
  const settlement = await response.json();
  console.log(settlement);
  return settlement.settlement;
};
