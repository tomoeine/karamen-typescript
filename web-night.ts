interface Karamen {
  karasa: number;
  nira: boolean;
  ninniku: boolean;
  men: "こんにゃく麺" | "中華麺";
}

const karamenElm = document.getElementById("karamen")!;
const konnyakuMenElm = document.getElementById("konnyaku-men")!;
const chukaMenElm = document.getElementById("chuka-men")!;
const karasaElm = document.getElementById("karasa")!;
const niraElm = document.getElementById("nira")!;
const ninnikuElm = document.getElementById("ninniku")!;

const showKaramen = (karamen: Karamen) => {
  console.log(karamen);

  karamenElm.style.display = "inline-block";
  karasaElm.style.opacity = String(karamen.karasa / 100);
  if (karamen.nira) {
    niraElm.style.display = "inline-block";
  } else {
    niraElm.style.display = "none";
  }
  if (karamen.ninniku) {
    ninnikuElm.style.display = "inline-block";
  } else {
    ninnikuElm.style.display = "none";
  }
  if (karamen.men === "こんにゃく麺") {
    konnyakuMenElm.style.display = "inline-block";
    chukaMenElm.style.display = "none";
  } else {
    konnyakuMenElm.style.display = "none";
    chukaMenElm.style.display = "inline-block";
  }
};

const karamen: Karamen = {
  karasa: 1,
  nira: true,
  ninniku: true,
  men: "こんにゃく麺",
};

// showKaramen(karamen);

const form = <HTMLFormElement>document.getElementById("karamen-form")!;
const karasa: HTMLInputElement = form.karasa;
const nira = form.nira;
const ninniku = form.ninniku;
const men = form.men;
const button = document.getElementById("submit")!;

button.addEventListener("click", () => {
  karamen.karasa = Number(karasa.value);
  karamen.nira = nira.value === "あり";
  karamen.ninniku = ninniku.value === "あり";
  karamen.men = men.value;
  showKaramen(karamen);
});
