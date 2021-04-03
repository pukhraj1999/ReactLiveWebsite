function Input(props) {
  return (
    <>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          {props.title}
        </label>
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          autoComplete="off"
          required
        />
      </div>
    </>
  );
}

export default Input;
