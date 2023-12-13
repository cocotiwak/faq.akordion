function changeClass(elementId) {
    var targetElement = document.getElementById(elementId);

    // Toggle the "modified" class on the target element
    targetElement.classList.toggle('minus');
  }