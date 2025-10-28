import { useRouter } from "next/router";
import posts from "../../data/posts.json";
import Button from "../../components/Button";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <p className="text-center text-gray-500 mt-10">Loading...</p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        {post.content}
      </p>

      <Button primary onClick={() => router.back()}>
        Go Back
      </Button>
    </div>
  );
}
