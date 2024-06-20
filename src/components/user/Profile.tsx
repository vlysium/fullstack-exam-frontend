import epochToTimeDate from "../../services/epochToTimeDate";
import { useAuthStore } from "../auth";
import ProfileAvatar from "./ProfileAvatar";
import styles from "./user.module.scss";

const Profile = () => {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className={styles.profile}>
        <div className={styles.loading}>Loading user...</div>
      </div>
    )
  }

  return (
    <div className={styles.profile}>
      <ProfileAvatar name={user.name}/>
      <h2 className={styles.userName}>{user.name}</h2>
      <p className={styles.userEmail}>{user.email}</p>
      <p className={styles.userJoinDate}>Join date: {epochToTimeDate(user.created_at)}</p>
    </div>
  )
}

export default Profile