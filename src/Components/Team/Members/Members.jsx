import '../style.css';
import parse from 'html-react-parser';
const Members = () => {
  let members =[];
var membersTeam = "";
members.forEach((member) => {
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
      membersTeam += member_card ;
    })
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" / >
      <section className="team">
        <h1>Shbab Btsad Shbab <span>members</span></h1>
        <div className="cards" id="members">
        
        {parse(membersTeam)}
      </div>
    </section >
    </>
    
  )
  
}

export default Members