import React from "react";

export default function Joke({ id, text }) {
  const [likes, setLikes] = React.useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    console.log(`like id: ${id} - NUmber of like: ${likes}`);
  };

  const handleDislike = () => {
    setLikes(likes - 1);
    console.log(`dislike id: ${id}- NUmber of like: ${likes}`);
  };

  return (
    <div>
      <p>{text}</p>
      <p>Likes {likes}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
    </div>
  );
}