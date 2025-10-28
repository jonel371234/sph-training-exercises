import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <li className="mb-5 border-b border-gray-200 dark:border-gray-700 pb-3">
      <Link
        href={`/posts/${post.id}`}
        className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
      >
        {post.title}
      </Link>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{post.description}</p>
    </li>
  );
}
