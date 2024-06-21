import styles from "./user.module.scss";

interface Props {
  name: string
}

const ProfileAvatar = ({name}: Props) => {
  const toInitials = (string: string) => {
    const initials = string.split(" ").map((n) => n[0]).join("");
    const maxThreeInitials = initials.substring(0, 3);
    return maxThreeInitials.toUpperCase();
  };

  return (
    <div className={styles.profileAvatar} data-initials={toInitials(name)} role="img"/>
  )
}

export default ProfileAvatar