import { Meta, Story } from '@storybook/react';
import FirstStepModal from '.';

export default {
  title: 'FirstStepModal',
  component: FirstStepModal,
  args: {
    title: 'FirstStepModal'
  }
} as Meta;

export const Basic: Story = (args) => <FirstStepModal {...args} />;
