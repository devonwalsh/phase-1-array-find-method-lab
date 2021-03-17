function superbowlWin(array) { 
    const output = array.find(input => input.result === 'W')
    if (output != undefined) {
      return output.year
    }
    else return undefined;
  }