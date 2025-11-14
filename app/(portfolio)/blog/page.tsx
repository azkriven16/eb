import Link from "next/link";
import { client } from "@/sanity/client";
import { Post } from "@/sanity/sanity.types";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-6xl p-4 flex items-center justify-center">
      <div className="flex-col md:flex-row flex items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8">Posts</h1>
          <ul className="flex flex-col gap-y-4">
            {posts.map((post) => (
              <li className="hover:underline" key={post._id}>
                <Link href={`/blog/${post.slug?.current}`}>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{new Date(post.publishedAt ?? "").toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-full w-full aspect-square invert dark:invert-0 saturate-100 dark:saturate-200 flex-1"></div>
      </div>
    </main>
  );
}
