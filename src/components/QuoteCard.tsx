interface Props {
  quote: string;
  author: string;
}

function QuoteCard({ quote, author }: Props) {
  return (
    <div className="relative top-[45%] text-center text-white">
      <p className="px-3 text-xl font-thin">&#34; {quote} &#34;</p>
      <p className="pt-3 text-center font-extralight"> - {author}</p>
    </div>
  );
}

export default QuoteCard;
