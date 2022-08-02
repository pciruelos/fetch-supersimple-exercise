const input = document.querySelector('#searchInput')

const userList = document.querySelector('#users')

let users = []

window.addEventListener('DOMContentLoaded', async () => {

  userList.innerHTML = '<h1>Loading</h1>'

  const data = await loadUsers()
  users = data.data
  renderUsers(users)

})

async function loadUsers() {
  const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=1000')
  return await response.json()
}

input.addEventListener('keyup', e => {
  const newUsers = users.filter(u1 => u1.firstname.toLowerCase().includes(input.value.toLowerCase()))
  renderUsers(newUsers)
})

const createUserItems = users =>
  users.map(u => `<li class="bg-zinc-800 hover:bg-zinc-500 hover:cursor-pointer">${u.firstname}</li>`).join(' ')


function renderUsers(users) {
  const itemsString = createUserItems(users)
  userList.innerHTML = itemsString
}