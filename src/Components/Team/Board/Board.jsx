import '../style.css';
import parse from 'html-react-parser';
const Board = () => {
  let board = [
    {
      gender: "girl",
      name: "Shahd Nooh",
      title: "CEO",
      facebook: "",
      inastagram: "",
      linkedin: "",
  },
  {
    gender: "boy",
    name: "Mohsen El Sayed",
    title: "Chairman",
    facebook: "",
    inastagram: "",
    linkedin: "",
},
{
  gender: "girl",
  name: "Sama Nooh",
  title: "V.CEO",
  facebook: "",
  inastagram: "",
  linkedin: "",
},
{
  gender: "girl",
  name: "Radwa El Gendy",
  title: "COO",
  facebook: "",
  inastagram: "",
  linkedin: "",
},
{
  gender: "girl",
  name: "Salma Ahmed",
  title: "CCO",
  facebook: "",
  inastagram: "",
  linkedin: "",
},
{
  gender: "girl",
  name: "Nour Ahmed",
  title: "CAO",
  facebook: "",
  inastagram: "",
  linkedin: "",
}
];
var boardTeam = "";
board.forEach((member) => {
      let member_card = `
        <div className="card">
          <div className="${member.gender}">
            <img src="" alt=""/>
          </div>
          <p className="title">${member.title}</p>
          <h3 className="name">${member.name}</h3>
          <div className="social">
            <a href="${member.facebook}"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="${member.inastagram}"><i class="fa-brands fa-instagram"></i></a>
            <a href="${member.linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      `;
      console.log(member_card);
      boardTeam += member_card ;
    })
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" / >
      <section className="team">
        <h1>Shbab Btsad Shbab <span>Board</span></h1>
        <div className="cards" id="Board">
        
        {parse(boardTeam)}
      </div>
    </section >
    </>
    
  )
  
}

export default Board