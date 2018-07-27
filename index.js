const produceDrivingRange = function(blockRange){
  return function(blockOne, blockTwo){
    let blocks = Math.abs(parseInt(blockOne.slice(0,-2)) - parseInt(blockTwo.slice(0,-2)))
      if (blocks < blockRange) {
        return `within range by ${blocks}`
      } else {
        blocksOutOfRange = blocks - blockRange
        return `${blocksOutOfRange} blocks out of range`
      }
    }
  }
