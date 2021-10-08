import React from 'react';
import Button from './atoms/Button';
import SideBar from './molecules/SideBar';

function Layout1({ leftHeaderItems, rightHeaderItems, drawerItems, body, footer }) {

  return (
    <div className={'layout-one'}>
      <header>
        <span className={'left-aligned-items'}>
          {/* {leftHeaderItems.map((item, _) => {
            return <button onClick={() => item.action(item.value)}>{item.value}<div>{item.image}</div></button>
          })} */}
          {leftHeaderItems.map((item, index) => {
            return <Button
              value={item.value}
              icon={item.image}
              action={item.action}
            />
          })}
        </span>
        <span className={'right-aligned-items'}>
          {rightHeaderItems.map((item, index) => {
            return <Button icon={item.image} action={item.action} />
          })}
        </span>
      </header>
      <body>
        <SideBar
          barItems={drawerItems}
        />
        <div className={'main-content'}>
          <div className={'container'}>{body}</div>
        </div>
      </body>
      <footer>
        <div className={'left-content'}>
          {footer.left}
        </div>
        <div className={'center-content'}>
          {footer.center}
        </div>
        <div className={'right-content'}>
          {footer.right}
        </div>
      </footer>
    </div>
  );
}

export default Layout1;