// https://teachablemachine.withgoogle.com/models/Tcpa0QZvs/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier(
      "https://teachablemachine.withgoogle.com/models/L3FO7SAcg/model.json",
      modelReady
    );
  }
  
  function modelReady() {
    classifier.classify(gotResults);
  }
  
  function gotResults(error, results) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML =
        "Detected " + results[0].label + " " +(results[0].confidence * 100).toFixed(2) + " %";
      document.getElementById("result_label").style.color =
        "rgb(" +
        random_number_r +
        "," +
        random_number_g +
        "," +
        random_number_b +
        ")";

      if (results[0].label == "Cat") {
        document.getElementById("image125156").src = "cat.webp";
      } else if (results[0].label == "Dog") {
        document.getElementById("image125156").src = "dog.webp";
      } else {
        document.getElementById("image125156").src = "https://www.freepnglogos.com/uploads/ear-png/ear-very-basic-listen-icon-ios-iconset-icons-35.png";
      }
    }
  }
  