let completed = localStorage.getItem("progress") || 0;

function completeCourse() {
  completed++;
  localStorage.setItem("progress", completed);
  alert("Course Completed!");
}

if (document.getElementById("progress")) {
  document.getElementById("progress").innerText = completed;
}
