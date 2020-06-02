
function onScroll(event) {
  const scrolledTo = window.innerHeight + window.pageYOffset;
  const scrollLimit = document.body.offsetHeight;
  const scrollThreshold = 30;
  ​
  if (scrollLimit - scrolledTo <= scrollThreshold) {
  // TODO update
  }
  }
  
  ​
  window.addEventListener('scroll', onScroll);
  