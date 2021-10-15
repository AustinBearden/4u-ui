
function SideBar({ barItems }) {

  return (
    <div className={'ui4-sidebar'}>
      <div className={'ui4-sidebar-contents'}>
        {barItems.map((item, _) => {
          return <button className={'ui4-sidebar-button'} onClick={() =>
            item.action()}
          >{item.value}</button>
        })}
      </div>
    </div>
  );
}

export default SideBar;