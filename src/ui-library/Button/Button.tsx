import "./style.css"

function Button(props: any) {
  return <button type={props.type} className="button">{props.children}</button>;
}

export default Button;
