import React from "react";
import ReactDOM from "react-dom";
import App from './App';

import SuprSendInbox from '@suprsend/react-inbox'
import 'react-toastify/dist/ReactToastify.css' // needed for toast notifications, can be ignored if hideToast=true

// add to your react component
<SuprSendInbox
  workspaceKey= "<workspace_key>"
  subscriberId= "<subscriber_id>"
  distinctId= "<distinct_id>"
/>

ReactDOM.render(<App />,document.getElementById('root'));


