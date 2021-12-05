// write function and use inside a setTimeout function and give parameter..
function statechangedPostQuestion() {
    function postinsql(topicId) {
        console.log(topicId)
    }
    const sms = 'I really successful to solve my millions of problems, Which helped me to imagine from different angles. I really grateful to my allah....'
    setTimeout(postinsql, 4000, sms)
}
statechangedPostQuestion();

//setTimeout funtion inside a parameter...
const p = 'hello there'
setTimeout(() => {
    console.log(p)
}, 2000)

// anaother ey to use parameter...
const sms = () => {
    console.log(text)
}
const text = 'hello developer you are really ginius'
setTimeout(sms, 1000, text)