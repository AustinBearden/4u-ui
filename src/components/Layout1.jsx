import React from 'react';

function Layout1() {

  return (
    <div className={'layout-one'}>
      <header>
        <div className={'left-aligned-items'}>
          hey
        </div>
        <div className={'right-aligned-items'}>
          buddy
        </div>
      </header>
      <body>
        <div className={'left-drawer'}>hey</div>
        <div className={'main-content'}>there</div>
      </body>
      <footer>
        <div className={'left-content'}>
          left content
        </div>
        <div className={'center-content'}>
          center content
        </div>
        <div className={'right-content'}>
          right content
        </div>
      </footer>
    </div>
  );
}

export default Layout1;