const categoriesList = document.querySelector('#categories');
const itemList = categoriesList.querySelectorAll('.item');
const itemArr = itemList.length;
console.log(`Number of categories: ${itemArr}`);

itemList.forEach(item => {
  const itemTitle = item.querySelector('h2');
  const titleText = itemTitle.textContent;

  const elements = item.querySelectorAll('ul li');
  const elementsCount = elements.length;

  console.log(`Category: ${titleText}`);
  console.log(`Elements: ${elementsCount}`);
});


