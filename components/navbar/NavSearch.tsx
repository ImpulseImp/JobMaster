import { Input } from '../ui/input';

function NavSearch() {
  return (
    <Input
      type='text'
      placeholder='find something here...'
      className='max-w-xs dark:bg-muted'
    />
  );
}
export default NavSearch;
