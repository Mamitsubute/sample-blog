export default function About() {
    return (
      <div className="min-h-screen p-8">
        <main className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <div className="prose dark:prose-invert">
            <p className="mb-4">
              Welcome to our blog! This is a sample Next.js application that demonstrates
              how to create multiple pages in a modern web application.
            </p>
            <p>
              Feel free to customize this page with your own content, images, and styling.
            </p>
          </div>
        </main>
      </div>
    );
  }