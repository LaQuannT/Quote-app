interface Props {
  quote: string;
  author: string;
}

function QuoteCard({ quote, author }: Props) {
  return (
    <div className="quoteCard">
      <p className="cardText">{quote}</p>
      <p className="cardAuthor">{author}</p>
    </div>
  );
}

export default QuoteCard;
