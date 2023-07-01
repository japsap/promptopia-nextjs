'use client'

import { SessionProvider } from 'next-auth/react';

const Prodiver = ({ children, session }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Prodiver