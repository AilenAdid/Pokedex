export default function Pokemon(props) {
  const pokemon = props.pokemon;

  return (
    <>
      <h1>{pokemon.name}</h1>
    </>
  );
}
