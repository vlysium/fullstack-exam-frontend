import styles from "./user.module.scss";

interface Props {
  name: string
}

const ProfileAvatar = ({name}: Props) => {
  const initials = name.split(" ").map((n) => n[0]).join("");

  return (
    <div className={styles.profileAvatar} data-initials={initials} role="img"/>
  )
}

export default ProfileAvatar