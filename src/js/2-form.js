const STORAGE_KEY = 'user-data';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', () => {
  const userEmail = form.elements.email.value;
  const userMessage = form.elements.message.value;

  const data = {
    email: userEmail,
    message: userMessage,
  };

  saveToLS(STORAGE_KEY, data);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = loadFromLS(STORAGE_KEY) || {};
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key);

  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.elements.email.value = data.email || 'Anonymus';
  form.elements.message.value = data.message || '';
}

restoreData();