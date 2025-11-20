import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Page/Landing/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "padded",
    nextjs: {
      appDirectory: true,
      navigation: {
        push: (path: string) => {},
      },
    },
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
