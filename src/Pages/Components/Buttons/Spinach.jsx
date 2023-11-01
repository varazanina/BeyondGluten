import "./spinach.css";

export const Spinach = () => {
  const spinachTheme = "spinach";
  const body = document.body;

  const switchMode = () => {
    const currentTheme = body.classList[0];
    if (currentTheme) {
      body.classList.remove(currentTheme);
    }
    
    body.classList.add(spinachTheme);
  };

  return (
    <button id="spinachMode" onClick={switchMode}></button>
  );
};