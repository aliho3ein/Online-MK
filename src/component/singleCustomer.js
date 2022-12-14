export default function CustomerItem({ detail }) {
  const { title, disc, image } = detail;

  return (
    <div className="cardCustomer" data-aos="flip-down">
      <div
        className="imgCard"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="infoCard">
        <h2>{title}</h2>
        <p>{disc}</p>
      </div>
    </div>
  );
}
