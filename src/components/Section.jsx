import css from '../css/Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <div className={css.coverB}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};
