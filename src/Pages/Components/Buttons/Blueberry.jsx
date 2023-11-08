import "./blueberry.css";

export const Blueberry = () => {

  // By Nina

  const blueberryTheme = "blueberry";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];

    // removing previous class - if there is one - with the previous color settings
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    // adding the class to the body
    body.classList.add(blueberryTheme);
  };

  return (
    <button id="blueberryMode" onClick={switchMode}></button>
  );
};