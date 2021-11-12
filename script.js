const urlComic = ("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a78e3adcbc7bd18276cc614ce23deb26&hash=9fa0da4cb7c4e322ed7bca01b1ca91c4&limit=30")
const characterUrl = ('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a78e3adcbc7bd18276cc614ce23deb26&hash=9fa0da4cb7c4e322ed7bca01b1ca91c4&limit=30')




async function getMarvel() {
  try {
    let res = await axios.get(urlComic)
    let res2 = await axios.get(characterUrl)
    let comics = res.data
    let characters = res2.data
    console.log(comics)
    console.log(characters)
    showCharacterData(characters)

  } catch (error) {
    console.log(error);
  } finally {
    console.log("done")
  }

}
getMarvel()

const dataBoxes = document.querySelector('.boxes')

function showCharacterData(characters) {
  let characterName = document.createElement("h3");
  characterName.innerText = res2.data.results.name
  dataBoxes.appendChild(characterName)

  let image = document.createElement('img')
  image.src = res2.data.results.thumbnail
  dataBoxes.appendChild(image)


}



const searchMarvel = document.querySelector('searchMarvel')

// searchMarvel.addEventListener('submit', (e) => {
//   e.preventDefault()

//   console.log(searchMarvel.value)
// })