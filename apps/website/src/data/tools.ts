export type Tool = {
  name: string;
  url: string;
  description: string;
  repo?: string;
  year?: number;
  tags?: string[];
};

export const tools: Tool[] = [
  {
    name: 'Cryptic on Paper',
    url: 'https://cryptic-on-paper.netlify.app',
    description: `Turn something simple into something secure. Just your phrase, your rules, and a password only you know how to generate 🤫`,
    repo: 'https://github.com/ny1am/cryptic-on-paper',
    year: 2022,
  },
];
