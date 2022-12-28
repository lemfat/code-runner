import type { ComponentStoryObj } from "@storybook/react";
import { Button } from "./Button";

type Story = ComponentStoryObj<typeof Button>;
export default {
  component: Button,
  parameters: {
    layout: "centered"
  }
};

export const Default: Story = {
  args: {}
};

