const Overlay = ({ nav }) => {
  return (
    <div
      className={
        nav
          ? `absolute inset-0 bg-linear-to-b from-black/30 from-30% to-white to-70% duration-300 ease-in ${nav ? "scale-y-100" : "scale-y-0"}`
          : ""
      }
    ></div>
  );
};

export default Overlay;
