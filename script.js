const workoutForm = document.getElementById('workoutForm');
const entriesList = document.getElementById('entriesList');

workoutForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const exercise = document.getElementById('exercise').value;
  const duration = document.getElementById('duration').value;

  const entry = document.createElement('li');
  entry.innerHTML = `<strong>${date}</strong> - ${exercise} (${duration} mins) <button class="delete-button">Delete</button>`;
  entriesList.appendChild(entry);

  workoutForm.reset();
});

entriesList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-button')) {
    const entry = e.target.parentElement;
    entriesList.removeChild(entry);
  }
});
