import "./wine.css";

export const Wine = () => {

  // By Nina
  
  const wineTheme = "wine";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];

    // removing previous class - if there is one - with the previous color settings
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    // adding the class to the body
    body.classList.add(wineTheme);
  };

  return (
    <button id="wineMode" onClick={switchMode}></button>
  );
};