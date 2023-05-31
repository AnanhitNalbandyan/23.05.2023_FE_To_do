import './style.css'
import { getTodo, createTodo, markDone, createTodo, createTodo } from './api'

const sectionTodos = document.getElementById('todos')

const todos = await getTodo(1)

const newTodo = await createTodo (1,{title} )
console.log(newTodo)
const todoComponent =(todo)=>{

    const div = document.createElement('div')
    div.classList.add('todo')
    
    const span = document.createElement('span')
    span.classList.add('title')
    span.innerText=todo.title
    
    const button = document.createElement('button')
    button.innerText = 'done'
    button.disabled = todo.completed
    
    div.append(span, button)
  
  button.addEventListener('click', async()=>{
    await createTodo(todo.id,todo.title)
    button.innerText = 'Loading...'
      await markDone(todo.id)
    button.disabled = true
    button.innerText = 'Done'
  })

    return div
  
}



const todosElement = todos.map(todoComponent)
sectionTodos.append(...todosElement)


// Задание:
// обработчик формы
// отправить запрос используя createTodo
// результат вывести в консоль
// доп. добавить элемент на страницу

/*
const todo = await markDone(150)
document.write(JSON.stringify(todo))
*/
/*
const todo = await getTodo(2)
  document.write(JSON.stringify(todo))
*/

/*
  const todo = await createTodo(2, 'ToDo')
  document.write(JSON.stringify(todo))
*/

/*
(async ()=>{
  const todo = await getTodo(2)
  document.write(JSON.stringify(todo))
}) ()
*/


/*getTodo(1).then((data)=>{
  document.write(JSON.stringify(data))
})*/