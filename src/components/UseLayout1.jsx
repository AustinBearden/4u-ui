import React from 'react';
import Layout1 from './Layout1';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import AttachmentIcon from '@mui/icons-material/Attachment';

function UseLayout1() {

  function mainBody() {
    return (
      <div>{'content'}</div>
    )
  }

  function button1Action() {
    alert('hey there')
  }

  return (
    <Layout1
      leftHeaderItems={[{ image: <ArrowCircleUpIcon />, action: button1Action, value: 'Download' }, { image: <AttachmentIcon />, action: button1Action, value: 'Attachment' }]}
      rightHeaderItems={[{ image: <SearchIcon />, action: button1Action }, { image: <GitHubIcon />, action: button1Action }, { image: <SettingsIcon />, action: button1Action }]}
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