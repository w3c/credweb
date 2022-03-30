function openup(i) {
  document.getElementById(i+'-up').style.display='none';
  document.getElementById(i+'-down').style.display='inline';
  document.getElementById(i+'-body').style.display='block';
}
function closeup(i) {
  document.getElementById(i+'-up').style.display='inline';
  document.getElementById(i+'-down').style.display='none';
  document.getElementById(i+'-body').style.display='none';
}
