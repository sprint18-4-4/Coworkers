import Image from "next/image";

const ArticleContent = ({ content, image }: { content: string; image: string | null }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md-regular text-text-default line-clamp-1 overflow-hidden break-all">{content}</p>
      {image && <Image src={image} alt="게시글 이미지" quality={100} width={120} height={120} />}
    </div>
  );
};

export default ArticleContent;
