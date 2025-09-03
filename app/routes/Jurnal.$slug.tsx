import { useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";
import { ButtonLink } from "~/components/Button";
import { SimpleLayout } from "~/components/SimpleLayout";
import { getAllPosts } from "~/models/posts";

export async function loader({ params }: { params: { slug: string } }) {
  const post = getAllPosts().find((p) => p.slug === params.slug);

  if (post && post.url) {
    return json({
      pdfUrl: post.url,
      title: post.title,
      description: post.description,
    });
  }

  throw new Response("Not Found", { status: 404 });
}

export default function JurnalPost() {
  const { pdfUrl, title, description } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout title={title} intro={description}>
      <div className="flex justify-end mb-4">
        <ButtonLink href={pdfUrl} download variant="secondary">
          Download PDF
        </ButtonLink>
      </div>
      <div style={{ width: "100%", height: "80vh" }}>
        <iframe
          src={`${pdfUrl}#view=fitH`}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </SimpleLayout>
  );
}
