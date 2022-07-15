import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IIpfsMediaProps, IpfsMedia } from '../src';

const meta: Meta = {
  title: 'IpfsMedia',
  component: IpfsMedia,
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

const Template: Story<IIpfsMediaProps> = args => <IpfsMedia {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Video = Template.bind({});

Video.args = {
  hash: 'QmcniBv7UQ4gGPQQW2BwbD4ZZHzN3o3tPuNLZCbBchd1zh',
};

export const Image = Template.bind({});
Image.args = {
  hash: 'Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH',
};
