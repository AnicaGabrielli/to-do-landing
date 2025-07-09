import { Stats } from '../types/types'
import { motion } from 'framer-motion'

interface StatsCardProps {
  stats: Stats
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Total Tasks</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalTasks}</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Completed</h3>
          <p className="text-3xl font-bold mt-2">{stats.completedTasks}</p>
        </div>
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800">Pending</h3>
          <p className="text-3xl font-bold mt-2">{stats.pendingTasks}</p>
        </div>
      </div>
    </motion.div>
  )
}