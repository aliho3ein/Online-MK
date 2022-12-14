export default function SingleCrew({ detail, num }) {
  let { title, image, disc } = detail;
  let id = num;

  let info = disc.split("-");

  return (
    <div className="crewCard" data-aos="fade-up" onClick={() => cardInfo(id)}>
      <div className="part1"></div>
      <div className="part2"></div>
      <div className="part3"></div>
      <div className="part4"></div>
      <div className="part5"></div>
      <div className="part6"></div>
      <div className="part7"></div>
      <div className="part8"></div>
      <div className="part9"></div>
      <div className="part10"></div>
      <div className="part11"></div>
      <div className="part12"></div>
      <div className="part13"></div>
      <div className="part14"></div>
      <div className="part15"></div>
      <div className="part16"></div>
      <div className="part17"></div>
      <div className="part18"></div>
      <div className="part19"></div>
      <div className="part20"></div>
      <div className="part21"></div>
      <div className="part22"></div>
      <div className="part23"></div>
      <div className="part24"></div>
      <div className="part25"></div>
      <div
        className="card"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={`cardInfo info-${id}`}>
          <h2>{title}</h2>
          <ul className="detail">
            <li>{info[0]}</li>
            <li>{info[1]}</li>
            <li>{info[2]}</li>
            <li>{info[3]}</li>
          </ul>
          <ul className="social">
            <li className="fa-brands fa-square-twitter"></li>
            <li className="fa-brands fa-instagram"></li>
            <li className="fa-brands fa-linkedin"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function cardInfo(id) {
  let area = document.querySelector(`.info-${id}`);
  area.classList.toggle("cardInfoUp");
}
