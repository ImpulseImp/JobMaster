import { SignedIn, UserButton } from '@clerk/nextjs';

function UserIcon() {
  return (
    <SignedIn>
      <UserButton />
    </SignedIn>
  );
}
export default UserIcon;
