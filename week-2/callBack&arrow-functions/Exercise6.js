const determineWeather = temp => {
  if (temp > 25) {
    return "hot"
  }
  return "cold"
}

const commentOnWeather = (temp) => {
  console.log("It is" + " " + determineWeather(temp))
}

commentOnWeather(30)
commentOnWeather(22) 