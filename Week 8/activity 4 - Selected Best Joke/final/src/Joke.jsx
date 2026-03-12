import React from "react";

export default function Joke({ id, text, handleSelected, isSelected }) {
  const [likes, setLikes] = React.useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    console.log(`like id: ${id} - NUmber of like: ${likes}`);
  };

  const handleClick = () => {
    handleSelected(id);
  };

  const handleDislike = () => {
    setLikes(likes - 1);
    console.log(`dislike id: ${id}- NUmber of like: ${likes}`);
  };

  const jokeStyle = () => {
    return "joke" + (isSelected ? " selected" : "");
  };

  return (
    <div onClick={handleClick} className={jokeStyle()}>
      <p>{text}</p>
      <p>Likes {likes}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
    </div>
  );
}