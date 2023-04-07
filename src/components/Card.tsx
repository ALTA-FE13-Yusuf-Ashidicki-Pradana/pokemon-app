interface CardProps {
  onNavigate: () => void;
  link: string;
  nama: string;
}

function Card(props: CardProps) {
  return (
    <div
      className="m-2 flex flex-col justify-end border-8 border-black rounded-2xl bg-transparant shadow-lg p-4"
      onClick={props.onNavigate}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.link}.svg`}
        alt=""
      />

      <div className="w-full text-center bg-black text-white mt-2 p-3 m-0 font-silkscreen">
        {props.nama}
      </div>
    </div>
  );
}

export default Card;
