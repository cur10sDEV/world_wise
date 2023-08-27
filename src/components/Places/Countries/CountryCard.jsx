const CountryCard = ({ country }) => {
  return (
    <div className="bg-slate-600 text-center py-4 px-12 rounded-md border-l-4 border-yellow-600">
      <span>{country.emoji}</span>
      <h2 className="text-2xl mt-2">{country.country}</h2>
    </div>
  );
};
export default CountryCard;
