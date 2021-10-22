import Button from '../atoms/Button';

function OptionCircle() {

  function items() {
    return (
      <>
        <Button value={'Item 1'} action={() => console.log('hey')} />
        <Button value={'Item 2'} action={() => console.log('hey')} />
        <Button value={'Item 3'} action={() => console.log('hey')} />
        <Button value={'Item 4'} action={() => console.log('hey')} />
        <Button value={'Item 4'} action={() => console.log('hey')} />
        <Button value={'Item 4'} action={() => console.log('hey')} />
      </>
    );
  }

  return (
    <div className={'option-circle'}>
      <div className={'quad2'}>
        <div className="tile">quad2</div>
        <div className="menu">
          {items()}
        </div>
      </div>
      <div className={'quad1'}>
        <div className="tile">quad1</div>
        <div className="menu">
          {items()}
        </div>
      </div>
      <div className={'quad3'}>
        <div className="tile">quad3</div>
        <div className="menu">
          {items()}
        </div>
      </div>
      <div className={'quad4'}>
        <div className="tile">quad4</div>
        <div className="menu">
          {items()}
        </div>
      </div>
    </div>
  );
}

export default OptionCircle;