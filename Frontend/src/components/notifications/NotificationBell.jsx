// components/notifications/NotificationBell.jsx
import { useState, useRef } from "react";
import NotificationItem from "./NotificationItem";
import "./notification.css";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Assignment Posted",
      message: "New DBMS assignment is available"
    },
    {
      id: 2,
      title: "Grade Updated",
      message: "Your ML grade has been published"
    }
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div
      className="notification-wrapper"
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 150);
      }}
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
            <span>Notifications</span>
            {notifications.length > 0 && (
              <button
                className="mark-all"
                onClick={() => setNotifications([])}
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="notification-list">
            {notifications.length === 0 ? (
              <div className="notification-empty">
                No new notifications
              </div>
            ) : (
              notifications.map((n) => (
                <NotificationItem
                  key={n.id}
                  title={n.title}
                  message={n.message}
                  onRead={() => markAsRead(n.id)}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
