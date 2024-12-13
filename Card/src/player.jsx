const player = (props) => {
  return (
    <div
      style={{
        width: 400,
        border: "1px solid blue",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "400px",
        }}
        src={props.image}
        alt=""
      />
      <h3 style={{ padding: "1rem" }}>{props.name}</h3>
    </div>
  );
};
export default player;