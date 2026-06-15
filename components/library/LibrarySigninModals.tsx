import React from 'react';

import SignIn from '@/components/signin';
import SignOut from '@/components/signout';

interface LibrarySigninModalsProps {
  showSignIn: boolean;
  showSignOut: boolean;
  onCloseSignIn: () => void;
  onCloseSignOut: () => void;
  onSubmit: (studentId: string) => void;
}

export default function LibrarySigninModals({
  showSignIn,
  showSignOut,
  onCloseSignIn,
  onCloseSignOut,
  onSubmit,
}: LibrarySigninModalsProps) {
  return (
    <>
      <SignIn visible={showSignIn} onClose={onCloseSignIn} onSubmit={onSubmit} />
      <SignOut visible={showSignOut} onClose={onCloseSignOut} onSubmit={onSubmit} />
    </>
  );
}
