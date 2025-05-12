import { Post } from '../types/post';

export const dummyPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'Next.js is a React framework that enables server-side rendering and static site generation...',
    author: 'John Doe',
    createdAt: '2024-03-20T10:00:00Z'
  },
  {
    id: '2',
    title: 'Understanding TypeScript',
    content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript...',
    author: 'Jane Smith',
    createdAt: '2024-03-19T15:30:00Z'
  },
  {
    id: '3',
    title: 'The Power of Tailwind CSS',
    content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs...',
    author: 'Mike Johnson',
    createdAt: '2024-03-18T09:15:00Z'
  }
];