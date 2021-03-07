 
 document.addEventListener("DOMContentLoaded", () => {
  const app = new Medication();
  // Must call this function after add any medications.
  const refreshMedList = () => {
    document.querySelector("#med-list").innerHTML = Medication.all
      .map((med) => `<li>${med.name} #${med.id} Date: ${med.startDate} Frequency: ${med.frequency}</li>`)
      .join("\n");
    console.log("Added med", Medication.all);

  };

  // Adds Medications
  const addMedForm = document.querySelector("#add-med");
  console.log('adding event listener');
  addMedForm.addEventListener("submit", (submitMed) => {
    console.log('helloo');
    submitMed.preventDefault();
    const name = document.querySelector("#add-med-name").value;
    const startDate = document.querySelector("#add-med-date").value;
    const frequency = document.querySelector("#add-med-freq").value;
    const med = app.addMed(name, startDate, frequency);
    refreshMedList();
    addMedForm.reset();

  });

});
document.querySelector("#joke").onclick = function() {
  // jQuery's AJAX
  $.ajax({
    method: "GET",
    // the endpoint
    url: "https://icanhazdadjoke.com/",
    headers: {"Accept": 'application/json'},
    })
    .done(function(results) {
      // when a response is recieved this code runs
      console.log(results);
      displayResults(results);
    })
    .fail(function() {
      // when an error is received, this function runs
      console.log("ERROR");
    });
}
function displayResults(results) {
  $("#display-joke").text(results.joke);
}

