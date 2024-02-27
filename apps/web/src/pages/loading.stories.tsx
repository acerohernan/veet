import { Meta, StoryObj } from "@storybook/react";

import LoadingPage from "./loading";

const meta: Meta<typeof LoadingPage> = {
  title: "Pages/LoadingPage",
  component: LoadingPage,
};

export default meta;

type Story = StoryObj<typeof LoadingPage>;

export const Default: Story = {};
