import "./mustard.css";

export const Mustard = () => {
  const mustardTheme = "mustard";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    body.classList.add(mustardTheme);
  };

  return (
    <button id="mustardMode" onClick={switchMode}></button>
  );
};