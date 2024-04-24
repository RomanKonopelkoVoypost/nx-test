import NxWelcome from './nx-welcome';
import { packages } from '@app/packages';

console.log(packages(), 'packages');

export function App() {
  return (
    <div>
      <NxWelcome title="order-portal" />
    </div>
  );
}

export default App;
