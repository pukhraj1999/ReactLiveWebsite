function TextArea(props) {
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          row="3"
          required
        ></textarea>
      </div>
    </>
  );
}

export default TextArea;
