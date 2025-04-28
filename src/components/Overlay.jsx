const Overlay = ({ nav }) => {
  return (
    <div
      className={
        nav
          ? `fixed inset-0 z-10 h-screen bg-linear-to-b from-black/30 from-100% to-white duration-300 ease-in md:hidden ${nav ? "scale-y-100" : "scale-y-0"}`
          : ""
      }
    ></div>
  );
};

export default Overlay;
