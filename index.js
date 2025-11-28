// Simple student feedback example
const feedbacks = [
  { student: 'Alice', rating: 5, comment: 'Great lecture!' },
  { student: 'Bob', rating: 4, comment: 'Good, could use more examples.' },
];

function addFeedback(student, rating, comment) {
  feedbacks.push({ student, rating, comment });
}

function printSummary() {
  console.log(`Total feedbacks: ${feedbacks.length}`);
  const avg = (feedbacks.reduce((s, f) => s + f.rating, 0) / feedbacks.length).toFixed(2);
  console.log(`Average rating: ${avg}`);
  console.log('All feedbacks:');
  feedbacks.forEach(f => console.log(`${f.student}: (${f.rating}) ${f.comment}`));
}

// Example usage
addFeedback('Charlie', 5, 'Very helpful exam review.');
printSummary();

module.exports = { addFeedback, printSummary };
