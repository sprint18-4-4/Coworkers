import type { Meta, StoryObj } from "@storybook/react";
import SignUpForm from "./SignUpForm";

const meta: Meta<typeof SignUpForm> = {
  title: "Auth/SignUpForm",
  component: SignUpForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    formData: { control: "object" },
    errors: { control: "object" },
    isSubmitting: { control: "boolean" },
    isButtonEnabled: { control: "boolean" },
    handleChange: { action: "handleChange" },
    handleSubmit: { action: "handleSubmit" },
    validateField: { action: "validateField" },
  },
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {
    formData: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {},
    isSubmitting: false,
    isButtonEnabled: false,
  },
};
