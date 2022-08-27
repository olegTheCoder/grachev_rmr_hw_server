import './style.css';

function Button(props: any) {
  return (
    <button onClick={props.handleSubmit} type={props.type} disabled={!props.isValid || !props.dirty} className="button">
      {props.children}
    </button>
  );
}

export default Button;
