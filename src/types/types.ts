export interface Task {
  id: string
  title: string
  description: string
  status: 'pending' | 'completed'
  dueDate: string
  createdAt: string
  updatedAt: string
}

export interface Stats {
  totalTasks: number
  completedTasks: number
  pendingTasks: number
  averageCompletionTime: string
}