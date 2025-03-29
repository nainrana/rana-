// Smooth scroll functionality for navigation links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Toggle the YouTube video play/pause functionality
const videoElements = document.querySelectorAll('.video iframe');
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    const video = videoElements[index];
    const videoUrl = video.src;
    const isPlaying = videoUrl.includes('autoplay=1');
    
    // If video is playing, pause it
    if (isPlaying) {
      video.src = videoUrl.replace('autoplay=1', 'autoplay=0');
      button.textContent = "Play Video";
    } else {
      // Otherwise, play the video
      video.src = videoUrl.replace('autoplay=0', 'autoplay=1');
      button.textContent = "Pause Video";
    }
  });
});
