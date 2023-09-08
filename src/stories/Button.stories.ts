import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/button/Button';

const meta: Meta<typeof Button> = {
  title: 'GfcButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimarydButton: Story = {
  args: {
    label: 'Button',
    extended: false,
    color: 'Primary',
  },
};
