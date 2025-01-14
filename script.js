const saveOrder = () => {
    const order = [...bentoBox.children].map(card => card.textContent);
    localStorage.setItem('bentoOrder', JSON.stringify(order));
  };
  
  Sortable.create(bentoBox, {
    animation: 150,
    onEnd: saveOrder,
  });
  
  // On page load, restore the order
  const savedOrder = JSON.parse(localStorage.getItem('bentoOrder'));
  if (savedOrder) {
    const currentCards = [...bentoBox.children];
    savedOrder.forEach(text => {
      const card = currentCards.find(c => c.textContent.trim() === text.trim());
      if (card) bentoBox.appendChild(card); // Reorder cards
    });
  }
  