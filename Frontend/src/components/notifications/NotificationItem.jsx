// components/notifications/NotificationItem.jsx
import "./notification.css";

export default function NotificationItem({ title, message }) {
  return (
    <div className="notification-item">
      <div className="notification-dot" />
      <div className="notification-content">
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

