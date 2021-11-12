const urlComic = ("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a78e3adcbc7bd18276cc614ce23deb26&hash=9fa0da4cb7c4e322ed7bca01b1ca91c4&limit=30")
const characterUrl = ('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a78e3adcbc7bd18276cc614ce23deb26&hash=9fa0da4cb7c4e322ed7bca01b1ca91c4&limit=30')




async function getMarvel() {
  try {
    let res = await axios.get(urlComic)
    let res2 = await axios.get(characterUrl)
    let comics = res.data.data.results
    let characters = res2.data.data.results
    console.log(comics)
    console.log(characters)
    // showCharacterData(characters)
    showComicData(comics)

  } catch (error) {
    console.log(error);
  } finally {
    console.log("done")
  }

}
getMarvel()

const dataBoxes = document.querySelector('.boxes')

function showCharacterData(characters) {
  characters.forEach(character => {
    let characterName = document.createElement("h3");
    characterName.innerText = character.name
    dataBoxes.appendChild(characterName)

    let image = document.createElement('img')
    image.src = `${character.thumbnail.path + "/portrait_xlarge." + character.thumbnail.extension}`
    dataBoxes.appendChild(image)

    let characterDescription = document.createElement('p')

    if (character.description === "") {
      characterDescription.innerText = "No description available"
      dataBoxes.appendChild(characterDescription)
    } else {
      characterDescription.innerText = character.description
      dataBoxes.appendChild(characterDescription)
    }

    let characterComic = document.createElement('h4')
    characterComic.innerText = `${'COMIC: ' + character.comics.items[0].name}`
    dataBoxes.appendChild(characterComic)

  })

}

function showComicData(comics) {
  comics.forEach(comics => {
    let comicTitle = document.createElement("h3")
    comicTitle.innerText = comics.title
    dataBoxes.appendChild(comicTitle)

    let comicImage = document.createElement("img")
    comicImage.src = `${comics.thumbnail.path + "/portrait_xlarge." + comics.thumbnail.extension}`
    dataBoxes.appendChild(comicImage)

    //comicCharacters needs support
    let comicCharacters = document.createElement('h5')
    comics.characters.items.forEach((character) => {
      comicCharacters.innerText = `${"CHARACTERS: " + character.name}`;
      dataBoxes.appendChild(comicCharacters);
    });
    // console.log(comics.characters.items)

    let comicDescription = document.createElement('p')
    comicDescription.innerText = comics.description
    dataBoxes.appendChild(comicDescription)

    let comicPrice = document.createElement('h4')
    comicPrice.innerText = `${"PRICE: " + "$" + comics.prices[0].price}`
    dataBoxes.appendChild(comicPrice)

  })


}


const marvelForm = document.querySelector('#marvel-form')
const searchMarvel = document.querySelector('#searchMarvel')

marvelForm.addEventListener("submit", (e) => {
  e.preventDefault()
  removeCharacter()
  removeComic()
  let characterSearch = searchMarvel.value
  console.log(characterSearch)
  fetchData(characterSearch)


})

function removeCharacter() {
  dataBoxes.innerHTML = ""
}
function remoceComic() {
  dataBoxes.innerHTML = ""
}