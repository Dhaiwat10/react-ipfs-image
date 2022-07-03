import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IpfsImage } from '../.';

const App = () => {
  return (
    <div>
      <IpfsImage hash="Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
