import { dummyPosts } from '../../../data/posts';
import Link from 'next/link';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = dummyPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen p-8">
        <main className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
          ← Back to posts
        </Link>
        
        <article className="mt-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-500 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="prose max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </main>
    </div>
  );
}