import logo from "./logo.svg";
import "./ReactLogo.css";

export default function App({ paragraph, link }) {
  return (
    <div className="ReactLogo">
      <header className="ReactLogo-header">
        <img src={logo} className="ReactLogo-logo" alt="logo" />
        {paragraph ? (
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        ) : null}
        {link ? (
          <a className="ReactLogo-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        ) : null}
      </header>
    </div>
  );
}
