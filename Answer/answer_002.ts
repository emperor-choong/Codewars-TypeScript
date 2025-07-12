function inArray(a1: string[], a2: string[]): string[] {
  let result: string[] = [];
  let index: number;
  let exit: boolean;
  
  for (let i = 0; i < a1.length; i++) {
    exit = false;

    for (let j = 0; j < a2.length; j++) {
      if(a2[j].length < a1[i].length){
        continue;
      }

      index = a1[i].length;
      for (let k = 0; k <= a2[j].length-a1[i].length; k++) {
        if(a2[j].substring(k, index) == a1[i]) {
          result.push(a1[i]);
          exit = true;
          break;
        }
        index++;
      }

      if (exit == true){
        break;
      }
    }
  }

  return result.sort();
}

// let a1: string[] = ["arp", "live", "strong"];
// let a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];
// console.log(inArray(a1, a2));

  