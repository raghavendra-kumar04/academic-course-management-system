import Navbar from "../components/common/Navbar";
import NotificationItem from "../components/notifications/NotificationItem";

export default function Notifications() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px 24px" }}>
        <h2>All Notifications</h2>
        <NotificationItem
          title="Assignment Deadline"
          message="Web Dev assignment due tomorrow"
        />
      </div>
    </>
  );
}