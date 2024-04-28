const studentDate = document.querySelector(".studentDate")

let userData = {
    ogrenciler: [
        { ad: "Ali", soyad: "Yılmaz", dogumTarihi: "2001" },
        { ad: "Ayşe", soyad: "Demir", dogumTarihi: "2002" },
        { ad: "Mehmet", soyad: "Kara", dogumTarihi: "2003" }
    ]
};

const year = new Date().getFullYear();


userData.ogrenciler.map(findUser => {
    const age = year- findUser.dogumTarihi
    studentDate.innerHTML += `
        <h2>${findUser.ad}</h2>
        <p>${findUser.soyad}</p>
        <p>${age}</p>
    `
})
