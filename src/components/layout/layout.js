import AppBar from "./appbar";

const Layout = (props) => {
  return (
    <>
      <AppBar />
      <main className="container">{props.children}</main>
    </>
  );
};

export default Layout;
