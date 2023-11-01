import "./blueberry.css";

export const Blueberry = () => {
  const blueberryTheme = "blueberry";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    body.classList.add(blueberryTheme);
  };

  return (
    <button id="blueberryMode" onClick={switchMode}></button>
  );
};