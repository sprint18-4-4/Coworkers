interface ContentSectionProps {
  content: string | null;
}

const ContentSection = ({ content }: ContentSectionProps) => {
  return (
    <section className="text-md-regular text-text-primary">
      <p>{content}</p>
    </section>
  );
};

export default ContentSection;
