import React from 'react';
import Layout1 from './Layout1';

function UseLayout1() {

  function mainBody() {
    return (
      <div>{'content'}</div>
    )
  }

  return (
    <Layout1
      leftHeaderItems={[<div>bob</div>, <div>doe</div>, <div>bill</div>]}
      rightHeaderItems={[<div>bob</div>, <div>john</div>, <div>bill</div>]}
      drawerItems={[<div>item1</div>, <div>item2</div>, <div>item3</div>]}
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