// Auto-fill dates
(function(){
  const now = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const effective = months[now.getMonth()] + " " + String(now.getDate()).padStart(2,'0') + ", " + now.getFullYear();
  document.getElementById('effective-date').textContent = effective;
  document.getElementById('updated-date').textContent = effective;
  document.getElementById('year').textContent = now.getFullYear();
})();

// Print / Download (Print dialog)
document.getElementById('downloadBtn').addEventListener('click', function(){
  window.print();
});

// Copy policy text to clipboard for easy paste
document.getElementById('editBtn').addEventListener('click', async function(){
  try {
    const policy = document.getElementById('policy').innerText.trim();
    await navigator.clipboard.writeText(policy);
    this.textContent = "Copied!";
    setTimeout(()=> this.textContent = "Copy policy text", 1600);
  } catch (e) {
    alert('Unable to copy automatically. You can select and copy the text manually.');
  }
});

// Accessibility: ensure focus outlines for keyboard users
document.addEventListener('keydown', function(e){
  if (e.key === 'Tab') document.body.classList.add('show-focus');
});
