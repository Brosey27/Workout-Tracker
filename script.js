const workoutForm = document.getElementById('workoutForm');
const entriesList = document.getElementById('entriesList');

// Load existing entries from local storage on page load
document.addEventListener('DOMContentLoaded', function () {
  const savedEntries = JSON.parse(localStorage.getItem('workoutEntries')) || [];

  savedEntries.forEach(entry => {
    const entryElement = document.createElement('li');
    entryElement.innerHTML = `${entry.html}<button class="delete-button">Delete</button>`;
    entriesList.appendChild(entryElement);
  });
});

workoutForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const exercise = document.getElementById('exercise').value;
  const duration = document.getElementById('duration').value;

  const entryElement = document.createElement('li');
  entryElement.innerHTML = `<strong>${date}</strong> - ${exercise} (${duration} mins) <button class="delete-button">Delete</button>`;
  entriesList.appendChild(entryElement);

  // Save the new entry to local storage
  const savedEntries = JSON.parse(localStorage.getItem('workoutEntries')) || [];
  savedEntries.push({ html: entryElement.innerHTML });
  localStorage.setItem('workoutEntries', JSON.stringify(savedEntries));

  workoutForm.reset();
});

entriesList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-button')) {
    const entry = e.target.parentElement;
    entriesList.removeChild(entry);

    // Remove the deleted entry from local storage
    const savedEntries = JSON.parse(localStorage.getItem('workoutEntries')) || [];
    const entryIndex = savedEntries.findIndex(savedEntry => savedEntry.html === entry.innerHTML);
    if (entryIndex !== -1) {
      savedEntries.splice(entryIndex, 1);
      localStorage.setItem('workoutEntries', JSON.stringify(savedEntries));
    }
  }
});

