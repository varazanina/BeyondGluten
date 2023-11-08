import "./ketchup.css";

export const Ketchup = () => {

  // By Nina
  
  const ketchupTheme = "ketchup";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];

    // removing previous class - if there is one - with the previous color settings
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    // adding the class to the body
    body.classList.add(ketchupTheme);
  };

  return (
    <button id="ketchupMode" onClick={switchMode}></button>
  );
};