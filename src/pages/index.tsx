import { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import TaskList from '../components/TaskList'
import StatsCard from '../components/StatsCard'
import Footer from '../components/Footer'
import { Task, Stats } from '../types/types'
import { getTasks, getStats } from '../utils/api'

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tasksData, statsData] = await Promise.all([
          getTasks(),
          getStats(),
        ])
        setTasks(tasksData)
        setStats(statsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Task Manager - Organize Your Life</title>
        <meta name="description" content="A modern task management solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Organize Your Tasks Effortlessly
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern solution to manage your daily tasks and boost your productivity.
          </p>
        </section>

        {/* Tasks Section */}
        <section className="py-8" id="tasks">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Your Tasks
          </h2>
          {loading ? (
            <div className="text-center py-12">Loading tasks...</div>
          ) : (
            <TaskList tasks={tasks} />
          )}
        </section>

        {/* Stats Section */}
        <section className="py-8" id="stats">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Productivity Stats
          </h2>
          {stats && <StatsCard stats={stats} />}
        </section>
      </main>

      <Footer />
    </div>
  )
}