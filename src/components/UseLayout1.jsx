import React from 'react';
import Layout1 from './Layout1';

function UseLayout1() {

  function mainBody() {
    return (
      <div>{'content'}</div>
    )
  }

  function button1Action(value) {
    alert(value)
  }

  return (
    <Layout1
      leftHeaderItems={[<div>bob</div>, <div>doe</div>, <div>bill</div>]}
      rightHeaderItems={[<div>bob</div>, <div>john</div>, <div>bill</div>]}
      drawerItems={
        [
          { value: 'Button1', action: button1Action },
          { value: 'Button2', action: button1Action },
          { value: 'Button3', action: button1Action }
        ]
      }
      body={mainBody()}
      footer={{
        left: <div>left footer item</div>,
        center: <div>center footer item</div>,
        right: <div>right footer item</div>
      }}
    />
  );
}

export default UseLayout1;