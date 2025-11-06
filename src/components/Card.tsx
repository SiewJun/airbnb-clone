interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  rating: number;
  years: number;
}

const Card = ({ imageUrl, title, description, rating, years }: CardProps) => {
  return (
    <div className="shrink-0 w-[280px] bg-muted rounded-3xl p-6 shadow-lg ">
      <div className="flex justify-center mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-center mb-1">{title}</h3>

      <p className="text-sm text-foreground font-light text-center mb-6">
        {description}
      </p>

      <div className="flex justify-center gap-6 py-3.5 px-2 bg-white rounded-xl">
        <div className="text-center pr-6 border-r border-foreground-light">
          <div className="flex items-center justify-center gap-1 mb-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="font-semibold">{rating.toFixed(2)}</span>
          </div>
          <p className="text-[0.625rem]">guest rating</p>
        </div>

        <div className="text-center">
          <p className="text-base font-semibold mb-1">{years}</p>
          <p className="text-[0.625rem]">years hosting</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
