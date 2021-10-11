import JokeItem from "./joke-item";

const JokeList = ({ items }) => {
  return (
    <ul>
      {items.map((joke) => (
        <JokeItem key={joke.id} style={{ margin: "16px 0" }} joke={joke} />
      ))}
    </ul>
  );
};

export default JokeList;
