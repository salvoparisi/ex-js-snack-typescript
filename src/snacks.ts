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