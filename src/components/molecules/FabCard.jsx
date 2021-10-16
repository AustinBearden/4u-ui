import React from 'react';
import Button from '../atoms/Button';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

function FabCard() {

  return (
    <div className={'fab-card-container'}>
      <div className={'fab-card-body'}>hey</div>
      <div className={'fab-card-end'}>
        <div className={'menu'}>
          <ViewWeekIcon />
        </div>
        <div className={'menu-expanded'}>
          <Button
            value={'Action 1'}
            action={() => alert('Action 1 clicked')}
          />
          <Button
            value={'Action 2'}
            action={() => alert('Action 2 clicked')}
          />
          <Button
            value={'Action 3'}
            action={() => alert('Action 3 clicked')}
          />
        </div>
      </div>
    </div>
  );
}

export default FabCard;

