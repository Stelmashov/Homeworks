function findPartMaxProduct(num) {
    const partitions = getCombinations(num);
    const [partsWithProduct, maxProduct] = getMaxProduct(partitions);
  
    const partMaxProd = partsWithProduct.filter(item => item[0] === maxProduct)
      .map(item => item[1])
      .reverse();
    partMaxProd.push(maxProduct);
  
    return partMaxProd;
  }
  function getCombinations(num, enough = num) {
    let item = [];
    for (let i = 1; i <= Math.min(num, enough); i++) {
      let prevItem = getCombinations(num - i, i);
      if (prevItem.length !== 0) {
        prevItem.forEach(el => item.push(Array.from([i, el]).flat(num)));
      } else {
        item.push([i]);
      }
    }
    return item;
  }
  function getMaxProduct(partitions) {
    let maxProduct = 0;
    partsWithProduct = partitions.map(el => {
      let curProduct = el.reduce((multi, cur) => multi * cur, 1);
      if (curProduct > maxProduct) {
        maxProduct = curProduct;
      }
      return Array.from([curProduct, el]);
    })
  
    return [partsWithProduct, maxProduct];
  }
  
  console.log('n = 4 - ', findPartMaxProduct(4));
  console.log('n = 5 - ', findPartMaxProduct(5));
  console.log('n = 8 - ', findPartMaxProduct(8));
  console.log('n = 10 - ', findPartMaxProduct(10));