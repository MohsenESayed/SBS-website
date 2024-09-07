const BoardSec = document.querySelector('#Board');
const LeadersSec = document.querySelector('#Leaders');
// Members
let Shahd_Nooh = {
    gender: "girl",
    name: "Shahd Nooh",
    title: "CEO",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Mohsen_El_Sayed = {
    gender: "boy",
    name: "Mohsen El Sayed",
    title: "Chairman",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Sama_Nooh = {
    gender: "girl",
    name: "Sama Nooh",
    title: "V.CEO",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Radwa_El_Gendy = {
    gender: "girl",
    name: "Radwa El Gendy",
    title: "COO",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Salma_Ahmed = {
    gender: "girl",
    name: "Salma Ahmed",
    title: "CCO",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Nour_Ahmed = {
    gender: "girl",
    name: "Nour Ahmed",
    title: "CAO",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Omar_Mohamed = {
    gender: "boy",
    name: "Omar Mohamed",
    title: "Head Of HR",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Sara_Eid = {
    gender: "girl",
    name: "Sara Eid",
    title: "Head Of Marketing",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Mohamed_Tamer = {
    gender: "boy",
    name: "Mohamed Tamer",
    title: "Head Of Content",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Lama_Mohamed = {
    gender: "girl",
    name: "Lama Mohamed",
    title: "Head Of PR",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Mina_Bishoy = {
    gender: "boy",
    name: "Mina Bishoy",
    title: "Head Of Creative",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Huda_El_Gendy = {
    gender: "girl",
    name: "Huda El Gendy",
    title: "Head Of Telegram",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
let Zeyad_Emad = {
    gender: "boy",
    name: "Zeyad Emad",
    title: "Head Of Web",
    facebook: "",
    inastagram: "",
    linkedin: "",
};
//  board
let board = [
    Shahd_Nooh,
    Mohsen_El_Sayed,
    Sama_Nooh,
    Radwa_El_Gendy,
    Salma_Ahmed,
    Nour_Ahmed
];
board.forEach((member) => { 
    console.log("Board") 
    let member_card = `
      <div class={style.card}>
        <div class={style.${member.gender}}>
          <img src="" alt=""/>
        </div>
        <p class={style.title}>${member.title}</p>
        <h3 class={style.name}>${member.name}</h3>
        <div class={style.social}>
          <a href=""><img src={FB} alt=""/></a>
          <a href=""><img src={IG} alt=""/></a>
          <a href=""><img src={LI} alt=""/></a>
        </div>
      </div>
    `;
    console.log(member_card);
    BoardSec.innerHTML+= member_card;
  })
// Leaders
let leaders = [
    Omar_Mohamed,
    Sara_Eid,
    Mohamed_Tamer,
    Lama_Mohamed,
    Mina_Bishoy,
    Huda_El_Gendy,
    Zeyad_Emad
  ];
  leaders.forEach((member) => {
console.log("Leaders")  
    let member_card = `
      <div class={style.card}>
        <div class={style.${member.gender}}>
          <img src="" alt=""/>
        </div>
        <p class={style.title}>${member.title}</p>
        <h3 class={style.name}>${member.name}</h3>
        <div class={style.social}>
          <a href=""><img src={FB} alt=""/></a>
          <a href=""><img src={IG} alt=""/></a>
          <a href=""><img src={LI} alt=""/></a>
        </div>
      </div>
    `;
    console.log(member_card);
    LeadersSec.innerHTML+= member_card ;

  })
