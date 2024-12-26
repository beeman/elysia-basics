import { treaty } from '@elysiajs/eden'
import type { ElysiaApp } from './src'

const app = treaty<ElysiaApp>('http://localhost:3000')

async function getUser(id: string) {
  const { data } = await app.user({ id }).get()
  return data
}

async function getNote() {
  const { data } = await app.note.get()
  return data
}

async function postForm(body: Record<string, string>) {
  const { data } = await app.form.post({ body })
  return data
}

const user1 = await getUser('1')
console.log('user1', user1)

const form1 = await postForm({ foo: 'bar' })
console.log('form1', form1)

const note1 = await getNote()
console.log('note1', note1)
