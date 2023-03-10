// // TOP WAVE ANIMATION //
// const container = document.getElementById("wave-container");
//
// const animateWave = x => {
//     const wave = document.createElement("div");
//
//     wave.className = "wave jl-purple";
//
//
//     wave.style.left = x.toString() + 'px';
//
//     container.appendChild(wave);
//
//     setTimeout(() => container.removeChild(wave), 2000);
// }
//
// window.onmousemove = m => animateWave(m.clientX);


// PDF READER //
const pdfPath = "/dist/assets/resume.pdf";
const pdfViewer = document.querySelector('#pdfViewer');

fetch(pdfPath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load PDF');
    }
    return response.blob();
  })
  .then(pdfBlob => {
    pdfViewer.data = URL.createObjectURL(pdfBlob);
  })
  .catch(error => {
    console.error(error);
  });
