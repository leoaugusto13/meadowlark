const fortuneCookies = [
    "Conquer your fears o they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don´t know.",
    "You will have a pleasant surprise.",
    "Whenerver possible, keep it simple.",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}