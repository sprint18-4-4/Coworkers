import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import Icon from "../Icon/Icon";

const meta: Meta<typeof Dropdown> = {
  title: "common/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const SortDropdown: Story = {
  render: () => {
    const Wrapper = () => {
      const [sorted, setSorted] = useState("최신순");
      return (
        <Dropdown>
          <Dropdown.Toggle className="flex gap-2 px-[14px] py-[10px] bg-background-primary rounded-xl">
            <span>{sorted}</span>
            <Icon name="downArrow" />
          </Dropdown.Toggle>
          <Dropdown.Items className="">
            <Dropdown.Item onClick={() => setSorted("최신순")}>최신순</Dropdown.Item>
            <Dropdown.Item onClick={() => setSorted("조회순")}>조회순</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
      );
    };

    return <Wrapper />;
  },
};

export const IconDropdown: Story = {
  render: () => {
    const Wrapper = () => {
      return (
        <Dropdown>
          <Dropdown.Toggle>
            <Icon name="kebab" />
          </Dropdown.Toggle>
          <Dropdown.Items className="w-[120px]">
            <Dropdown.Item onClick={() => []}>수정하기</Dropdown.Item>
            <Dropdown.Item onClick={() => {}}>삭제하기</Dropdown.Item>
          </Dropdown.Items>
        </Dropdown>
      );
    };
    return <Wrapper />;
  },
};
