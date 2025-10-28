import PostCard from "./PostCard";

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-center mt-6">
        No posts found.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
