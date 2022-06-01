import classes from "./MeetupDetail.module.css";

export default function MeetupDetail({ image, title, address, description }) {
  const { detail } = classes;

  return (
    <section className={detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
