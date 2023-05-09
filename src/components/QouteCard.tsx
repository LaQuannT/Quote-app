interface Props {
  qoute: string;
  author: string;
}

const QouteCard = ({ qoute, author }: Props) => {
  return (
    <div className="quoteCard">
      <p className="cardText">{qoute}</p>
      <p className="cardAuthor">{author}</p>
    </div>
  );
};

export default QouteCard;
