const searchSections = document.querySelectorAll<HTMLElement>('[data-search-filter]');

searchSections.forEach((section) => {
  const input = section.querySelector<HTMLInputElement>('[data-search-input]');
  const clear = section.querySelector<HTMLElement>('[data-search-clear]');
  const items = section.querySelectorAll<HTMLElement>('[data-search-item]');
  const values = section.querySelectorAll<HTMLElement>('[data-search-value]');

  if (!input) return;

  const filterItems = () => {
    const term = input.value.trim().toLowerCase();

    clear?.classList.toggle('hidden', !term);
    clear?.classList.toggle('flex', Boolean(term));

    items.forEach((item) => {
      const text = item.dataset.searchText ?? '';
      item.hidden = Boolean(term) && !text.includes(term);
    });
  };

  input.addEventListener('input', filterItems);
  clear?.addEventListener('click', () => {
    input.value = '';
    filterItems();
  });

  values.forEach((value) => {
    value.addEventListener('click', () => {
      input.value = value.dataset.searchValue ?? '';
      filterItems();
    });
  });
});
