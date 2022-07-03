import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as IpfsImage } from '../stories/IpfsImage.stories';

describe('IpfsImage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <IpfsImage hash="Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
