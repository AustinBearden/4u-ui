import React from 'react';
import Button from '../atoms/Button';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

function FabCard({ bodyText, buttons }) {

  return (
    <div className={'fab-card-container'}>
      <div className={'fab-card-body'}>
        {bodyText}
      </div>
      <div className={'fab-card-end'}>
        <div className={'menu'}>
          <ViewWeekIcon />
        </div>
        <div className={'menu-expanded'}>
          {buttons.map((button, _) => {
            return <Button
              value={button.value}
            />
          })}
        </div>
      </div>
    </div>
  );
}

export default FabCard;

