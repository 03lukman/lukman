export type MdxAttributes = { meta: Array<Record<string, any>> };

export type MdxModule = {
  filename: string;
  attributes: MdxAttributes;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  url?: string;
};

export function extractPostAttributes(attributes: MdxAttributes) {
  return {
    title: attributes.meta.find((m) => m.title)?.title,
    description: attributes.meta.find((m) => m.name === "description")?.content,
    date: attributes.meta.find((m) => m.date)?.date,
    ...attributes.meta,
  };
}

export function getPostFromMdxModule(mod: MdxModule): Post {
  return {
    slug: mod.filename.replace(/^Jurnal\./, "").replace(/\.mdx?$/, ""),
    ...extractPostAttributes(mod.attributes),
  };
}

export const getAllPosts = (limit?: number) => {
  const allPosts: Post[] = [
    {
      slug: "jurnal-ilmiah",
      title: "Scientific Journal - Artificial Intelligence",
      description:
        "Research conducted by Lukman Nurhakim on the application of AI in vehicle license plate detection for parking monitoring in toll road rest areas.",
      date: "2025-07-24",
      url: "/Lukman Nurhakim_212310002_Jurnal Ilmiah.pdf",
    },
  ];
  return limit ? allPosts.slice(0, limit) : allPosts;
};
