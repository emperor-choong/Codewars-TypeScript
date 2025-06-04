export function isValidWalk(walk: string[]) {
    let startingPoint_x = 0;
    let startingPoint_y = 0;
    for (let i = 0; i < walk.length; i++) {
        if(walk[i] == 'n'){
            startingPoint_y++;
        }else if(walk[i] == 's'){
            startingPoint_y--;
        }else if(walk[i] == 'e'){
            startingPoint_x++;
        }else if(walk[i] == 'w'){
            startingPoint_x--;
        }
    }
    
    if(startingPoint_x == 0 && startingPoint_y == 0 && walk.length == 10){
        return true;
    }else{
        return false;
    }
}

