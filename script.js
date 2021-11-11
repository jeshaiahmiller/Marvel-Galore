const url = ("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a78e3adcbc7bd18276cc614ce23deb26&hash=9fa0da4cb7c4e322ed7bca01b1ca91c4")





async function getMarvel() {
  try {
    let res = await axios.get(url)
    let movies = res.data
    console.log(movies)
  }
  catch (error) {
    console.log(error);
  }
}
getMarvel()