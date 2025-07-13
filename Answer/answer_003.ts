function sameCase(a: string, b: string): number {
    let lowercase: string = "abcdefghijklmnopqrstuvwxyz";
    let uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let result: number = 0;
    if(lowercase.includes(a) == false && uppercase.includes(a) == false || lowercase.includes(b) == false && uppercase.includes(b) == false) {
        result = -1;
    }else if(lowercase.includes(a) == true && lowercase.includes(b) == true || uppercase.includes(a) == true && uppercase.includes(b) == true) {
        result = 1;
    }else if(lowercase.includes(a) == true && uppercase.includes(b) == true || uppercase.includes(a) == true && lowercase.includes(b) == true) {
        result = 0;
    }

    return result;
}

// console.log(sameCase('C', 'B')); 
// console.log(sameCase('b', 'a'));
// console.log(sameCase('A', 's'));
// console.log(sameCase('c', 'B'));
// console.log(sameCase('\t', 'Z'));
// console.log(sameCase('H', ':'));

// error TS2550: Property 'includes' does not exist on type 'string'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later.
// Generate tsconfig.json by npx tsc --init
// "lib": ["es2015", "dom"]
// tsc

