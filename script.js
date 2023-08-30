const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Terima kasih telah melakukan pembelian!');
  });
});
