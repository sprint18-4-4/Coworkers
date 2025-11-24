"use client";
import { useGetUser } from "@/api/hooks";

const Test = () => {
  const { data } = useGetUser();
  console.log(data);
  return <div>Test</div>;
};

export default Test;
