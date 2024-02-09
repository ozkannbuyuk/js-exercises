function resizeAllGridItems() {
  let gridWidth = document.querySelector(".grid-container").offsetWidth;
  let gridItemWidth = document.querySelector(".grid-item").offsetWidth;
  let columnsNumber = ~~(gridWidth / gridItemWidth);
  let x = columnsNumber;
  let colIdx = 0;
  let columnsHeights = [0, 0, 0];
  let tempColumnsHeights = [];
  let allItems = document.getElementsByClassName("grid-item");
  for (x; x < allItems.length; x++) {
    let topItemHeight =
      columnsHeights[colIdx] + allItems[x - columnsNumber].offsetHeight;
    allItems[x].style.marginTop = topItemHeight - 300 + "px";
    tempColumnsHeights.push(topItemHeight - 300);
    colIdx++;
    if (colIdx === columnsNumber) {
      colIdx = 0;
      columnsHeights = tempColumnsHeights;
      tempColumnsHeights = [];
    }
  }
}
resizeAllGridItems();

setInterval(() => {
  resizeAllGridItems();
}, 500);
