import { Task } from '../types/types'
import { motion } from 'framer-motion'

interface TaskListProps {
  tasks: Task[]
}

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <div className="text-center py-8">No tasks found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task, index) => (
        <motion.div
          key={task.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
          <p className="text-gray-600 mt-2">{task.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                task.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {task.status}
            </span>
            <span className="text-sm text-gray-500">
              {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}