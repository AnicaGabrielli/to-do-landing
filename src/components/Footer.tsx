export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
        <p className="mt-2 text-gray-400">
          Powered by Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}