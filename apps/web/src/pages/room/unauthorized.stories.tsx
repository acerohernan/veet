import { Meta, StoryObj } from "@storybook/react";

import { UnathorizedRoom } from "./unauthorized";

const meta: Meta<typeof UnathorizedRoom> = {
  title: "Pages/UnathorizedRoom",
  component: UnathorizedRoom,
};

export default meta;

type Story = StoryObj<typeof UnathorizedRoom>;

export const Default: Story = {};
