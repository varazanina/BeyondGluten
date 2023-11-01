import "./wine.css";

export const Wine = () => {
  const wineTheme = "wine";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    body.classList.add(wineTheme);
  };

  return (
    <button id="wineMode" onClick={switchMode}></button>
  );
};