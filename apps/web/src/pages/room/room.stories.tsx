import { Meta, StoryObj } from "@storybook/react";

import RoomPage from ".";

const meta: Meta<typeof RoomPage> = {
  title: "Pages/RoomPage",
  component: RoomPage,
};

export default meta;

type Story = StoryObj<typeof RoomPage>;

export const Default: Story = {};
