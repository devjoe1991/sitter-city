import NavbarClient from './NavbarClient';

const Navbar = () => {
  // This is now a Server Component that renders the interactive Client Component.
  // You could fetch server-side data here in the future if needed.
  return <NavbarClient />;
};

export default Navbar; 