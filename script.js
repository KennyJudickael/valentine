function nextQuestion(current) {
  document.getElementById("q" + current).classList.remove("active");
  document.getElementById("q" + (current + 1)).classList.add("active");
}

function prevQuestion(current) {
  document.getElementById("q" + current).classList.remove("active");
  document.getElementById("q" + (current - 1)).classList.add("active");
}

function verifierReponses() {
  let reponsesCorrectes = {
    q1: "rouge",
    q2: "14",
    q3: "amour",
  };

  let q1 = document.querySelector('input[name="q1"]:checked')?.value;
  let q2 = document.querySelector('input[name="q2"]:checked')?.value;
  let q3 = document.querySelector('input[name="q3"]:checked')?.value;

  if (
    q1 === reponsesCorrectes.q1 &&
    q2 === reponsesCorrectes.q2 &&
    q3 === reponsesCorrectes.q3
  ) {
    document.getElementById("love-letter").style.display = "block";
  } else {
    alert("Oups ! Réessaie encore 💕");
  }
}
