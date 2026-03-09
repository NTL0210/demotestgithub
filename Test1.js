async function tinhtoan(a,b) {
    return a+b;
}

async function main() {
    let kq = await tinhtoan(5,6);
    console.log(kq);
}
main();