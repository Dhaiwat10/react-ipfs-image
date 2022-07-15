import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IIpfsAudioProps, IpfsAudio } from '../src';

const meta: Meta = {
  title: 'IpfsAudio',
  component: IpfsAudio,
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

const Template: Story<IIpfsAudioProps> = args => <IpfsAudio {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  hash: 'Qmc1G3UYwryKtfE4Vaq5qoaVinjEmAZzkTzsvW4yKygY2h',
};

export const AltGatewayUrl = Template.bind({});
AltGatewayUrl.args = {
  hash: 'Qmc1G3UYwryKtfE4Vaq5qoaVinjEmAZzkTzsvW4yKygY2h',
  gatewayUrl: 'https://gateway.pinata.cloud/ipfs',
};

export const AltHashFormat = Template.bind({});
AltHashFormat.args = {
  hash: 'ipfs://Qmc1G3UYwryKtfE4Vaq5qoaVinjEmAZzkTzsvW4yKygY2h',
};
