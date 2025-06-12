document.getElementById("positionForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const height = parseInt(document.getElementById("height").value);
    const skill = document.getElementById("skill").value;
    const resultDiv = document.getElementById("result");
    const positionOutput = document.getElementById("positionOutput");
    const drillsList = document.getElementById("drillsList");
    const positionImage = document.getElementById("positionImage");
  
    let position = '';
    let drills = [];
    let imageSrc = '';
  
    if (height >= 200) {
      position = "Center";
      drills = ["Rebounding", "Post Moves", "Shot Blocking"];
      imageSrc = "images/center.png";
    } else if (height >= 190 && skill === "defense") {
      position = "Power Forward";
      drills = ["Boxing Out", "Mid-range Shooting", "Defensive Slides"];
      imageSrc = "images/power-forward.png";
    } else if (height >= 180 && skill === "shooting") {
      position = "Shooting Guard";
      drills = ["Catch and Shoot", "Off-the-dribble Shooting", "3-point Shooting"];
      imageSrc = "images/shooting-guard.png";
    } else if (skill === "passing" || skill === "dribbling") {
      position = "Point Guard";
      drills = ["Ball Handling", "Pick and Roll", "Passing Under Pressure"];
      imageSrc = "images/point-guard.png";
    } else {
      position = "Small Forward";
      drills = ["Versatile Shooting", "Cutting", "On-ball Defense"];
      imageSrc = "images/small-forward.png";
    }
  
    positionOutput.textContent = position;
    drillsList.innerHTML = '';
    drills.forEach(drill => {
      const li = document.createElement("li");
      li.textContent = drill;
      drillsList.appendChild(li);
    });
  
    positionImage.src = imageSrc;
    resultDiv.classList.remove("hidden");
  });
  