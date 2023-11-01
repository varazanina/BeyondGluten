import "./ketchup.css";

export const Ketchup = () => {
  const ketchupTheme = "ketchup";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    body.classList.add(ketchupTheme);
  };

  return (
    <button id="ketchupMode" onClick={switchMode}></button>
  );
};