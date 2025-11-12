import BaseButton from "./BaseButton";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof BaseButton> = {
  title: "common/Button/Default",
  component: BaseButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outlinedPrimary", "outlinedSecondary"],
      description: "버튼 스타일",
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
      description: "버튼 크기",
    },
    danger: {
      control: "boolean",
      description: "위험",
    },
    disabled: {
      control: "boolean",
      description: "비활성화",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const SolidLarge: Story = {
  args: {
    variant: "solid",
    size: "large",
    children: "생성하기",
    className: "w-[332px] h-12",
  },
};

export const SolidMedium: Story = {
  args: {
    variant: "solid",
    size: "medium",
    children: "생성하기",
    className: "w-[132px] h-10",
  },
};

export const SolidSmall: Story = {
  args: {
    variant: "solid",
    size: "small",
    children: "생성하기",
    className: "w-[74px] h-[33px]",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "solid",
    size: "medium",
    children: (
      <>
        <span>ㅁ</span> {/* TODO(정상인): 아이콘 생성시 추가 */}
        <span>완료 취소하기</span>
      </>
    ),
    className: "w-[132px] h-10",
  },
};

export const OutlinedPrimaryLarge: Story = {
  args: {
    variant: "outlinedPrimary",
    size: "large",
    children: "생성하기",
    className: "w-[332px] h-12",
  },
};

export const OutlinedPrimaryMedium: Story = {
  args: {
    variant: "outlinedPrimary",
    size: "medium",
    children: "생성하기",
    className: "w-[132px] h-10",
  },
};

export const OutlinedPrimarySmall: Story = {
  args: {
    variant: "outlinedPrimary",
    size: "small",
    children: "생성하기",
    className: "w-[74px] h-[33px]",
  },
};

export const OutlinedSecondaryLarge: Story = {
  args: {
    variant: "outlinedSecondary",
    size: "large",
    children: "생성하기",
    className: "w-[332px] h-12",
  },
};

export const OutlinedSecondaryMedium: Story = {
  args: {
    variant: "outlinedSecondary",
    size: "medium",
    children: "생성하기",
    className: "w-[132px] h-10",
  },
};

export const OutlinedSecondarySmall: Story = {
  args: {
    variant: "outlinedSecondary",
    size: "small",
    children: "생성하기",
    className: "w-[74px] h-[33px]",
  },
};

export const DisabledSolid: Story = {
  args: {
    variant: "solid",
    size: "large",
    disabled: true,
    children: "생성하기",
    className: "w-[332px] h-12",
  },
};

export const DisabledOutlined: Story = {
  args: {
    variant: "outlinedPrimary",
    size: "large",
    disabled: true,
    children: "생성하기",
    className: "w-[332px] h-12",
  },
};

export const DangerSolid: Story = {
  args: {
    variant: "solid",
    size: "large",
    danger: true,
    children: "생성하기",
    className: "w-[332px] h-12",
  },
};
