const MyParagraph = (props) => {
  console.log("My paragraph running!");
  return <p>{props.children}</p>;
};

export default MyParagraph;
