import { Meta, StoryObj } from "@storybook/react";

import UnexpectedErrorPage from "./unexpected-error";

const meta: Meta<typeof UnexpectedErrorPage> = {
  title: "Pages/UnexpectedErrorPage",
  component: UnexpectedErrorPage,
};

export default meta;

type Story = StoryObj<typeof UnexpectedErrorPage>;

export const Default: Story = {};
