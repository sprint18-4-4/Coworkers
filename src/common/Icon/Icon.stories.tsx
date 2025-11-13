import type { Meta, StoryObj } from "@storybook/nextjs";
import Icon from "./Icon";
import { ICONS } from "./CONST_ICON";

const meta: Meta<typeof Icon> = {
  title: "Common/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "SVGR 기반 공용 Icon 컴포넌트. 크기는 `size`/`responsiveSize`, 색상은 `text-*` 클래스로 제어합니다.",
      },
    },
  },
  argTypes: {
    name: { control: "select", options: Object.keys(ICONS) },
    size: { control: "radio", options: ["x-sm", "sm", "rg", "md", "lg"] },
    responsiveSize: { control: "radio", options: ["mdUp", "growSm", undefined] },
    className: { control: "text" },
    "aria-label": { control: "text" },
  },
  args: {
    name: "searchSm", // 존재하는 키로 기본값 설정
    size: "md",
    responsiveSize: undefined,
    className: "text-icon-brand",
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = { render: (args) => <Icon {...args} /> };

export const AllIcons: Story = {
  render: (args) => {
    const keys = Object.keys(ICONS) as Array<keyof typeof ICONS>;
    return (
      <div className="grid grid-cols-2 tablet:grid-cols-4 pc:grid-cols-6 gap-6 p-6">
        {keys.map((key) => (
          <div key={String(key)} className="flex items-center gap-3 p-3 rounded-2xl border border-border-primary/50">
            <Icon {...args} name={key} />
            <span className="text-sm text-text-default break-words">{key}</span>
          </div>
        ))}
      </div>
    );
  },
  args: { size: "md", responsiveSize: "mdUp", className: "text-text-primary" },
};

export const WithAriaLabel: Story = {
  // 존재하는 키로 교체 (예: alertSm)
  args: { name: "alertSm", size: "rg", className: "text-point-pink", "aria-label": "알림 켜짐" },
};
