import { useState } from 'react';
import type Flatmate from '../../types.ts';
import './FlatmateTag.css';
import { ArrowContainer, Popover } from 'react-tiny-popover';
interface FlatmateTagProps {
  flatmate: Flatmate;
  index: number;
}

const FlatmateTag = ({ flatmate, index }: FlatmateTagProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={'white'}
          arrowSize={10}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '10px',
            }}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <ul>
              <li>Ausgaben: {flatmate.expenditure} €</li>
              <li>Tage abwesend: {flatmate.daysAbsent}</li>
            </ul>
          </div>
        </ArrowContainer>
      )}
    >
      <div
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        key={index}
        className="tag"
      >
        {flatmate.name}
      </div>
    </Popover>
  );
};

export default FlatmateTag;
