import screen from "./screen";

const styles = (colors, fonts) => ({
  screen: screen(colors, fonts),
  print: screen(colors, fonts)
});

export default styles;
