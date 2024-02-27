import { Meta, StoryObj } from "@storybook/react";

import { RoomLeft } from "./room-left";

const meta: Meta<typeof RoomLeft> = {
  title: "Pages/RoomLeft",
  component: RoomLeft,
};

export default meta;

type Story = StoryObj<typeof RoomLeft>;

export const Default: Story = {};
