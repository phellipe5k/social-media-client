import { Meta, Story } from '@storybook/react';
import BottomBar from '.';

export default {
  title: 'BottomBar',
  component: BottomBar,
  args: {
    title: 'BottomBar'
  }
} as Meta;

export const Basic: Story = (args) => <BottomBar {...args} />;
