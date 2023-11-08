import "./spinach.css";

export const Spinach = () => {

  // By Nina

  const spinachTheme = "spinach";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];
    
    // removing previous class - if there is one - with the previous color settings
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    // adding the class to the body
    body.classList.add(spinachTheme);
  };

  return (
    <button id="spinachMode" onClick={switchMode}></button>
  );
};