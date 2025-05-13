import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="pl-4 py-4 flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
          Simple Blog
        </Link>
        <Link 
          href="/about" 
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          About
        </Link>
      </div>
    </header>
  );
}