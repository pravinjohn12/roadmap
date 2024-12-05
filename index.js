document.addEventListener("DOMContentLoaded", () => {
    const countdownTimer = document.getElementById("countdown-timer");
    const progressPercent = document.getElementById("progress-percent");
    const weekCards = document.querySelector(".week-cards");
    const nextExamDay = document.getElementById("next-exam-day");
    const completedTopics = document.getElementById("completed-topics");
  
    // Initialize Variables
    let daysLeft = 50;
    let completed = 70;
  
    // Populate Weekly Planner
    for (let day = 1; day <= 100; day++) {
      const card = document.createElement("div");
      card.classList.add("card");
      if (day % 7 === 0) {
        card.classList.add("exam");
        card.innerHTML = `<h3>Exam Day</h3><p>Day ${day}</p><button>Take Exam</button>`;
      } else {
        card.innerHTML = `<h3>Day ${day}</h3><p>Study Topic ${day}</p>`;
      }
      weekCards.appendChild(card);
    }
  
    // Update Countdown and Progress
    countdownTimer.textContent = daysLeft;
    progressPercent.textContent = `${completed}%`;
    nextExamDay.textContent = 7; // Initially, next exam is on Day 7
    completedTopics.textContent = completed;
  });
  