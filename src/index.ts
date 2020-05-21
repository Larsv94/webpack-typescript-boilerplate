import styles from "./index.scss";

const element = document.createElement("h1");
element.innerHTML = "Hello Webpack 😊";
element.classList.add(styles.title);

const root = document.getElementById("root");
root?.appendChild(element);
