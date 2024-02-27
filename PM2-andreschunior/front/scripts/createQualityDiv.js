
// Función auxiliar para crear divs de calidades
function createQualitiesDiv(label, value) {
    const qualitiesDiv = document.createElement("div");
    qualitiesDiv.classList.add("qualities");
  
    const labelSpan = document.createElement("span");
    labelSpan.textContent = label;
  
    const breakElement = document.createElement("br");
  
    const valueSpan = document.createElement("span");
    valueSpan.textContent = value;
  
    qualitiesDiv.appendChild(labelSpan);
    qualitiesDiv.appendChild(breakElement);
    qualitiesDiv.appendChild(valueSpan);
  
    return qualitiesDiv;
  }

  module.exports = createQualitiesDiv;