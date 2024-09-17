import '../style.css';
import parse from 'html-react-parser';
const Leaders = () => {
  let leaders = [
    {
      gender: "boy",
      name: "Omar Mohamed",
      title: "Head Of HR",
      facebook: "",
      inastagram: "",
      linkedin: "",
  },
  {
    gender: "girl",
    name: "Sara Eid",
    title: "Head Of Marketing",
    facebook: "",
    inastagram: "",
    linkedin: "",
},
{
  gender: "boy",
  name: "Mohamed Tamer",
  title: "Head Of Content",
  facebook: "",
  inastagram: "",
  linkedin: "",
},
{
  gender: "girl",
  name: "Lama Mohamed",
  title: "Head Of PR",
  facebook: "",
  inastagram: "",
  linkedin: "",
},
{
  gender: "boy",
  name: "Mina Bishoy",
  title: "Head Of Creative",
  facebook: "",
  inastagram: "",
  linkedin: "",
},
{
  gender: "girl",
  name: "Huda El Gendy",
  title: "Head Of Telegram",
  facebook: "",
  inastagram: "",
  linkedin: "",
},
{
  gender: "boy",
  name: "Zeyad Emad",
  title: "Head Of Web",
  facebook: "",
  inastagram: "",
  linkedin: "",
}
];
var leadersTeam = "";
leaders.forEach((member) => {
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
      leadersTeam += member_card ;
    })
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" / >
      <section className="team">
        <h1>Shbab Btsad Shbab <span>leaders</span></h1>
        <div className="cards" id="leaders">
        
        {parse(leadersTeam)}
      </div>
    </section >
    </>
    
  )
  
}

export default Leaders