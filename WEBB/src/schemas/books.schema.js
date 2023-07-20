import * as Yup from 'yup';

export const bookSchema = Yup.object({
  title: Yup
    .string('Title err')
    .required('Required'),
  author: Yup
    .string('Enter author err')
    .required('Required'),
  bookText: Yup
    .string('Enter text err')
    .required('Required'),
})