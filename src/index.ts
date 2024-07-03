type CrontabEntry = {
  schedule: string
  task: string
}

const CrontabConverter = {
  crontabToJson(crontab: string): CrontabEntry[] {
    return crontab
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => {
        const parts = line.split(' ')
        if (parts.length < 6) {
          throw new Error(
            'Invalid crontab format: each line must have at least 6 parts',
          )
        }
        const schedule = parts.slice(0, 5).join(' ')
        const task = parts.slice(5).join(' ')
        return { schedule, task }
      })
  },

  jsonToCrontab(json: CrontabEntry[]): string {
    if (!Array.isArray(json)) {
      throw new TypeError('Invalid JSON format: input must be an array')
    }
    return json
      .map((entry) => {
        if (typeof entry !== 'object' || !entry.schedule || !entry.task) {
          throw new Error(
            'Invalid JSON format: each entry must be an object with schedule and task properties',
          )
        }

        return `${entry.schedule} ${entry.task}`
      })
      .join('\n')
  },
}

export default CrontabConverter
