interface CardDetailProps {
  link: string;
  hp: string;
  nilaihp: number;
  attack: string;
  nilaiAttack: number;
  defence: string;
  nilaiDefence: number;
  specialA: string;
  nilaiSA: number;
  specialD: string;
  nilaiSD: number;
  speed: string;
  nilaiSpeed: number;
  nama: string;
  height: string;
  weight: string;
}

function CardDetail(props: CardDetailProps) {
  return (
    <div className="p-10 font-silkscreen">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center items-center border-8 border-black rounded-xl bg-transparant shadow-lg p-4">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.link}.svg`}
            alt=""
          />
        </div>
        <div>
          <div className="border-4 border-black rounded-xl p-5">
            <div>
              {props.hp} : {props.nilaihp}
            </div>
            <div>
              {props.attack} : {props.nilaiAttack}
            </div>
            <div>
              {props.defence} : {props.nilaiDefence}
            </div>
            <div>
              {props.specialA} : {props.nilaiSA}
            </div>
            <div>
              {props.specialD} : {props.nilaiSD}
            </div>
            <div>
              {props.speed} : {props.nilaiSpeed}
            </div>
          </div>
        </div>
      </div>
      <div className="border-4 border-black rounded-xl p-5 my-5">
        <div>Name : {props.nama}</div>
        <div>Height : {props.height}</div>
        <div>Weight : {props.weight}</div>
      </div>
    </div>
  );
}

export default CardDetail;
