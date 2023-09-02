import { createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

export const AccessibleModulAndMenuContext = createContext(null);

function AccessibleModulAndMenuProvider({ children }: Props) {
  return <AccessibleModulAndMenuContext.Provider value={null}>{children}</AccessibleModulAndMenuContext.Provider>;
}

export default AccessibleModulAndMenuProvider;
