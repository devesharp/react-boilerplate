import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LoadingScreen } from './LoadingScreen';
import { ILoadingScreenProps } from './LoadingScreen.interface';

export default {
   title: 'Example/LoadingScreen',
   component: LoadingScreen,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta;

const Template: Story<ILoadingScreenProps> = (args) => <LoadingScreen {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   retry: () => {},
   error: false,
   show: true,
};
