import { getModuleTemplate } from '../helpers'

const teachersList = [
  { id: 1, name: 'Олександр Іванович', subjectId: 7 },
  { id: 2, name: 'Наталія Борисівна', subjectId: 1 },
  { id: 3, name: 'Іван Олександрович', subjectId: 5 },
  { id: 4, name: 'Оксана Василіївна', subjectId: 9 },
  { id: 5, name: 'Андрій Іванович', subjectId: 4 },
  { id: 6, name: 'Тетяна Миколаївна', subjectId: 10 },
  { id: 7, name: 'Михайло Сергійович', subjectId: 1 },
  { id: 8, name: 'Вікторія Ігорівна', subjectId: 3 },
  { id: 9, name: 'Сергій Вікторович', subjectId: 8 },
  { id: 10, name: 'Юлія Юріївна', subjectId: 6 },
  { id: 11, name: 'Артем Олександрович', subjectId: 7 },
  { id: 12, name: 'Олена Вячеславівна', subjectId: 2 },
  { id: 13, name: 'Володимир Михайлович', subjectId: 5 },
  { id: 14, name: 'Mapина Андріївна', subjectId: 9 },
  { id: 15, name: 'Василь Петрович', subjectId: 4 },
  { id: 16, name: 'Андрій Леонідович', subjectId: 2 },
  { id: 17, name: 'Людмила Миколаївна', subjectId: 10 },
  { id: 18, name: 'Тетяна Борисівна', subjectId: 3 },
  { id: 19, name: 'Наталія Володимирівна', subjectId: 3 },
]

const teachers = getModuleTemplate('teachers', teachersList)

teachers.getters.getTeachersBySubjectId = (state) => (subjectId) =>
  state.teachers.filter((teacher) => teacher.subjectId === subjectId)

export default teachers
