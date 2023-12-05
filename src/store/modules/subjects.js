import { getModuleTemplate } from '../helpers'

const subjectsList = [
  { id: 1, title: 'Математика' },
  { id: 2, title: 'Українська мова' },
  { id: 3, title: 'Англійська мова' },
  { id: 4, title: 'Фізика' },
  { id: 5, title: 'Хімія' },
  { id: 6, title: 'Біологія' },
  { id: 7, title: 'Історія' },
  { id: 8, title: 'Географія' },
  { id: 9, title: 'Література' },
  { id: 10, title: 'Інформатика' },
]

const subjects = getModuleTemplate('subjects', subjectsList)

export default subjects
