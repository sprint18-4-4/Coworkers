import type { Meta, StoryObj } from "@storybook/react";
import ConversionSection from "./ConversionSection";

const meta: Meta<typeof ConversionSection> = {
  title: "Page/Landing/ConversionSection",
  component: ConversionSection,
  parameters: {
    layout: "padded",
    nextjs: {
      appDirectory: true,
      navigation: {
        push: (path: string) => {},
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
