import Link from 'next/link';
import { dummyPosts } from '../data/posts';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Blog</h1>
          <Link 
            href="/posts/new" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Create New Post
          </Link>
        </div>
        
        <div className="space-y-6">
          {dummyPosts.map((post) => (
            <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-500">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">
                {post.content.substring(0, 150)}...
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>By {post.author}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}