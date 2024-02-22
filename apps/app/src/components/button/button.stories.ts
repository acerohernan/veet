import { Button } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["contained", "outlined"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    children: "Button",
    variant: "contained",
  },
};
