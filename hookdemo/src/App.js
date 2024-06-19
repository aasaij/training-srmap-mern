import './App.css';
import Child1 from './Child1';
import { createContext } from 'react';

export const UserContext = createContext()

function App() {

  const user = "Administrator"
  return (
   <main>
    <UserContext.Provider value={user}>
      <Child1/>
  </UserContext.Provider>
   </main>
  );
}

export default App;
