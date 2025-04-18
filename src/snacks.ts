//Snack 1
let API: unknown

API = false

if (typeof API === "string") {
  console.log(API.toUpperCase());
} else if (typeof API === "number") {
  console.log(API * 2);
} else if (typeof API === "boolean") {
  if (API === true) {
    console.log("Si");
  } else if (API === false) {
    console.log("No");
  }
}

//Snack 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniServizio: number[],
  ruolo: Developer | ProjectManager
}

//Snack 3

type Developer = {
  livelloEsperienza: "Junior" | "Mid" | "Senior"
  linguaggi?: string[]
  certificazioni: string[] | []
}

type ProjectManager = {
  teamSize: number | null
  budgetGestito?: number
  stakeholderPrincipali: string[] | []
}