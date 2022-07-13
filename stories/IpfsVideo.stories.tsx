import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IIpfsVideoProps, IpfsVideo } from '../src';

const meta: Meta = {
  title: 'IpfsVideo',
  component: IpfsVideo,
  argTypes: {
    hash: {
      control: {
        type: 'text',
      },
    },
    gatewayUrl: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IIpfsVideoProps> = args => <IpfsVideo {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  hash: 'QmcniBv7UQ4gGPQQW2BwbD4ZZHzN3o3tPuNLZCbBchd1zh',
};

export const AltGatewayUrl = Template.bind({});
AltGatewayUrl.args = {
  hash: 'QmcniBv7UQ4gGPQQW2BwbD4ZZHzN3o3tPuNLZCbBchd1zh',
  gatewayUrl: 'https://gateway.pinata.cloud/ipfs',
};

export const AltHashFormat = Template.bind({});
AltHashFormat.args = {
  hash: 'ipfs://QmcniBv7UQ4gGPQQW2BwbD4ZZHzN3o3tPuNLZCbBchd1zh',
};
