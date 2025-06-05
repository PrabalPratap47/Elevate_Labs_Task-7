const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

async function fetchUsers() {
  userContainer.innerHTML = "Loading...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Network response was not ok");
    const users = await res.json(); 
// res.json() converts the response into usable JavaScript objects/arrays.

    userContainer.innerHTML = "";
    users.forEach(user => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(div);
    });
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">Failed to fetch users. ${error.message}</p>`;
  }
}

reloadBtn.addEventListener('click', fetchUsers);

// Initial fetch
fetchUsers();
