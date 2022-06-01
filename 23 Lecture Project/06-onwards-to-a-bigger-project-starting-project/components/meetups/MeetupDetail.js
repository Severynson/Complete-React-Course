import classes from "./MeetupDetail.module.css";

export default function MeetupDetail({
  id,
  image,
  title,
  address,
  description,
}) {
  const { detail } = classes;

  return (
    <section className={detail} key={id}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
