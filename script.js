const characterId = document.getElementById("characterId");
const btnGo = document.getElementById("btn-go");
const content = document.getElementById("content");
const image = document.getElementById("img");

const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });

    return result
};

fetchApi(2);

btnGo.addEventListener('click', (event) => {
    event.preventDefault();
    const result =  fetchApi(characterId.value);
});