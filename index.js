let jokeDisplay = document.querySelector(".joke")

// fetch('https://icanhazdadjoke.com/', {
//   headers: {
//     "User-Agent": "https://github.com/sarahmr/fetch-practice-dad-jokes",
//     "Accept": "application/json"
//   }
// })
//   .then(res => res.json())
//   .then(res => {
//     console.log(res)
//     jokeDisplay.innerHTML = res.joke
//   })

async function fetchJoke() {
  let jokeData = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        "User-Agent": "https://github.com/sarahmr/fetch-practice-dad-jokes",
        "Accept": "application/json"
      }
    })
  let joke = await jokeData.json()
  console.log(joke)
  jokeDisplay.innerHTML = joke.joke
}

fetchJoke()
