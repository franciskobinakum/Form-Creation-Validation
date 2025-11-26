async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    // Optional: check response.ok
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = '';

    // Create list and append users
    const userList = document.createElement('ul');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // On error, clear and show message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    // Optionally log the real error for debugging
    // console.error('Fetch error:', error);
  }
}

// Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  fetchUserData();
});
