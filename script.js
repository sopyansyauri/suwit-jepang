let mulai = true;
while (mulai) {
  let comp = Math.random()
  let hasil = ""

  if (comp < 0.34) {
    comp = "kertas";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "batu";
  }
  // console.log(comp)


  // console.log(comp)

  let user = prompt("pilih: kertas, gunting, batu");

  if (user == comp) {
    hasil = "seri"
  } else if (user == "kertas") {
    if (comp == "gunting") {
      hasil = "kalah";
    } else {
      hasil = "menang";
    }
  } else if (user == "gunting") {
    // if (comp == "batu") {
    //   hasil = "kalah";
    // } else {
    //   hasil = "menang";
    // }
    hasil = (comp == "batu") ? "kalah" : "menang"

  } else if (user == "batu") {
    // if (comp == "gunting") {
    //   hasil = "menang";
    // } else {
    //   hasil = "kalah";
    // }
    hasil = (comp == "gunting") ? "menang" : "kalah";

  } else {
    alert("kamu memasukan yang tidak sesuai JANCOK")
    break;
  }

  alert("anda memilih: " + user + "\nkomputer memilih: " + comp + "\nhasilnya adalah anda " + hasil);

mulai = confirm("lagi");
}

alert("Terima Kasih sudah bermain cok")