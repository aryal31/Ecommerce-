const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
