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
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={'white'}
          arrowSize={10}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            className="popover-content"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <p>
              <span className="popover-label">Ausgaben: </span>
              <span className="popover-value">{flatmate.expenditure} €</span>
            </p>
            <p>
              <span className="popover-label">Tage abwesend: </span>
              <span className="popover-value">{flatmate.daysAbsent}</span>
            </p>
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
