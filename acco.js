const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__content");
  const tittleBlock = container.find(".team__item-tittle");
  const textBlock =  contentBlock.find(".team__content-block");
  const reqHeight = textBlock.height();
  const decor = tittleBlock.find(".team__item-decor-triangle");

  container.addClass('active');
  contentBlock.height(reqHeight);
  decor.addClass('decor-180')
}

const closeEveryItem = container => {
  const items = container.find('.team__content');
  const itemContainer = container.find('.team__item');
  const decorContainer = itemContainer.find('.team__item-tittle');
  const decor = decorContainer.find('.team__item-decor-triangle');

  itemContainer.removeClass('active');
  items.height(0);
  decor.removeClass('decor-180');
} 

$('.team__item-tittle').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest(".team__item");

  if (elemContainer.hasClass('active')) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
})