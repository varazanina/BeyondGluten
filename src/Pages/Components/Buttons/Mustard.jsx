import "./mustard.css";

export const Mustard = () => {

  //  By Nina

  const mustardTheme = "mustard";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];

    // removing previous class - if there is one - with the previous color settings
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    // adding the class to the body
    body.classList.add(mustardTheme);
  };

  return (
    <button id="mustardMode" onClick={switchMode}></button>
  );
};