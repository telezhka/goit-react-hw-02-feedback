import css from '../css/Notification.module.css';
export const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};
