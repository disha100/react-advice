// src/components/NotificationInbox.js
import React, { useEffect, useState } from 'react';
import SuprSend from 'suprsend-react';

const NotificationInbox = () => {
  const [inbox, setInbox] = useState([]);

  useEffect(() => {
    const fetchInbox = async () => {
      try {
        const response = await SuprSend.inbox({
          apiKey: process.env.REACT_APP_SUPRSEND_API_KEY,
          apiSecret: process.env.REACT_APP_SUPRSEND_API_SECRET,
        });
        setInbox(response.data);
      } catch (error) {
        console.error('Error fetching inbox:', error);
      }
    };

    fetchInbox();
  }, []);

  return (
    <div>
      <h2>Notification Inbox</h2>
      <ul>
        {inbox.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationInbox;
