document.addEventListener('DOMContentLoaded', function() {
  const fileSizeElements = document.querySelectorAll('.file-size');

  fileSizeElements.forEach(element => {
    const url = element.getAttribute('data-url');
    fetch(url, { method: 'HEAD' })
      .then(response => {
        const size = response.headers.get('content-length');
        const sizeInMB = (size / (1024 * 1024)).toFixed(2);
        element.querySelector('span').textContent = `${sizeInMB} MB`;
      })
      .catch(error => {
        element.querySelector('span').textContent = '0.00 MB';
        console.error('Erreur lors de la récupération de la taille du fichier:', error);
      });
  });
});