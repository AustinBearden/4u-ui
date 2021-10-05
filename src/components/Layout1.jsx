import React from 'react';

function Layout1({ leftHeaderItems, rightHeaderItems, drawerItems, body, footer }) {

  return (
    <div className={'layout-one'}>
      <header>
        <span className={'left-aligned-items'}>
          {leftHeaderItems.map((item, _) => {
            return <div>{item}</div>
          })}
        </span>
        <span className={'right-aligned-items'}>
          {rightHeaderItems.map((item, _) => {
            return <div>{item}</div>
          })}
        </span>
      </header>
      <body>
        <div className={'left-drawer'}>
          <div className={'contents'}>
            {drawerItems.map((item, _) => {
              return <button>{item}</button>
            })}
          </div>
        </div>
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