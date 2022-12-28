import markdownToHtml from "zenn-markdown-html";

export type MarkdownProps = {
  markdown: string;
};

export function Markdown({ markdown }: MarkdownProps) {
  const html = markdownToHtml(markdown);

  return <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />;
}
