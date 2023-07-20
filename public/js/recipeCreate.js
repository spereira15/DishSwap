const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#recipe-name').value.trim();
  const ingredients = document.querySelector('#recipe-ingredients').value.trim();
  const instructions = document.querySelector('#recipe-desc').value.trim();  

  if (name && instructions && ingredients) {
    const response = await fetch('/api/recipes/create', {
      method: 'POST',
      body: JSON.stringify({ name, instructions, ingredients }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipe');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipes/delete/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete recipe');
    }
  }
};

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.recipe-list')
  .addEventListener('click', delButtonHandler);
