import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Task Manager
        </Link>
        <div className="flex space-x-6">
          <a href="#tasks" className="text-gray-600 hover:text-blue-600 transition">
            Tasks
          </a>
          <a href="#stats" className="text-gray-600 hover:text-blue-600 transition">
            Stats
          </a>
        </div>
      </div>
    </nav>
  )
}