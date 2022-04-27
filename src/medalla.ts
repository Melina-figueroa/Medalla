let posicionLlegada: number = Number(prompt("ingrese posición"));
if (posicionLlegada === 1) {
  console.log("Entregar medalla de oro");
} else {
  if (posicionLlegada === 2) {
    console.log("Entregar medalla de bronce");
  } else {
    if (posicionLlegada === 3) {
      console.log("Entregar medalla de plata");
    } else {
      console.log("Entregar mención de participación");
    }
  }
}
