import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IIpfsImageProps, IpfsImage } from '../src';

const meta: Meta = {
  title: 'IpfsImage',
  component: IpfsImage,
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

const Template: Story<IIpfsImageProps> = args => <IpfsImage {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  hash: 'Qme8SriYgGNoXQzG1qYYZKThv3QTBf7pMJwUpu3gqaqQRH',
};
