import { useState } from "react";
import NotificationItem from "./NotificationItem";
import "./notification.css";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const notifications = [
    {
      title: "Assignment Posted",
      message: "New DBMS assignment is available",
    },
    {
      title: "Grade Updated",
      message: "Your ML grade has been published",
    },
  ];

  return (
    <div
      className="notification-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="notification-bell">
        🔔
        {notifications.length > 0 && (
          <span className="notification-badge">
            {notifications.length}
          </span>
        )}
      </div>

      {open && (
        <div className="notification-dropdown">
          <div className="notification-header">
            Notifications
          </div>

          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="notification-empty">
                No new notifications
              </div>
            ) : (
              notifications.map((n, i) => (
                <NotificationItem
                  key={i}
                  title={n.title}
                  message={n.message}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
