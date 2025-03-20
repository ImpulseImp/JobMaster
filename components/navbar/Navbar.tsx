import LinksDropdown from './LinksDropdown';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex justify-between  sm:justify-between sm:items-center flex-wrap gap-4 py-4 sm:py-8'>
        <Logo />
        <div className='flex gap-4 items-center'>
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
