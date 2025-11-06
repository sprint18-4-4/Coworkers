// import { Meta, StoryObj } from "@storybook/nextjs";
// import { useState } from "react";
// import SidebarMobile from "./SidebarMobile";

// const meta: Meta<typeof SidebarMobile> = {
//   title: "Components/Sidebar/_internal/SidebarMobile",
//   component: SidebarMobile,
//   tags: ["autodocs"],
//   parameters: {
//     layout: "fullscreen",
//   },
//   decorators: [
//     (Story) => (
//       <div className="w-full min-h-[100svh]">
//         <Story />
//       </div>
//     ),
//   ],
//   argTypes: {
//     isOpen: {
//       control: "boolean",
//       description: "사이드바 열림/닫힘 상태",
//     },
//     setIsOpen: {
//       action: "setIsOpen",
//     },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   render: function Render(args) {
//     const [isOpen, setIsOpen] = useState(args.isOpen ?? false);

//     return (
//       <div className="w-full min-h-[100svh]">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 bg-blue-500 text-white rounded absolute top-4 right-4 z-10"
//         >
//           모바일 전용 사이드바 열기
//         </button>
//         <SidebarMobile
//           {...args}
//           isOpen={isOpen}
//           setIsOpen={(value) => {
//             setIsOpen(value);
//             args.setIsOpen?.(value);
//           }}
//         />
//       </div>
//     );
//   },
//   args: {
//     isOpen: false,
//   },
// };

import { Meta, StoryObj } from "@storybook/nextjs";
import SidebarMobile from "./SidebarMobile";

const meta = {
  title: "Components/Sidebar/_internal/SidebarMobile",
  component: SidebarMobile,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SidebarMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
  },
};
