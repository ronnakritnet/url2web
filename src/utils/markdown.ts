import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export function parse(markdown: string): string {
  return marked.parse(markdown) as string;
}
