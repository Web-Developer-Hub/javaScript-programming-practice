// page count program
function paperRequirements(first, second, third) {
    const totalPage = (first * 100) + (second * 200) + (third * 300);
    return totalPage;
}
const firstBookCopy = 10;
const seconBookCopy = 14;
const thirdBookCopy = 13;
const totalPageNeed = paperRequirements(firstBookCopy, seconBookCopy, thirdBookCopy)
console.log(totalPageNeed);