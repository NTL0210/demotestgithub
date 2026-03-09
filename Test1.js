async function tinhtoancong(a,b) {
    return a+b;
}
async function tinhtoantru(a,b) {
    return a-b;
}

async function main() {
    let kq = await tinhtoancong(5,6);
    console.log(kq);
    let kq2 = await tinhtoantru(40,4);
    console.log(kq2);
}

main();