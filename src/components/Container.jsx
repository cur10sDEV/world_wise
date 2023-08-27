const Container = ({ children, styles }) => {
  return (
    <div className={`app-container p-8 text-white ${styles ? styles : ""}`}>
      {children}
    </div>
  );
};
export default Container;
