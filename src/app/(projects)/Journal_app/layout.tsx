interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-5`}>
      {children}
    </div>
  );
}

export default Layout