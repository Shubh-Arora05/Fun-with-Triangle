import { useState, createContext ,useEffect} from "react";

export const ThemeContext = createContext();


export const  ThemeProvider = ({children}) => {
  // const theme  = 'dark' ;
 

 
  const [theme, settheme] = useState('dark') ;
  
  const changeTheme = () => {
    

      if(theme === 'dark'){
        settheme('light');
        localStorage.setItem('theme' , 'light');

      }
      else{
        settheme('dark');
        localStorage.setItem('theme' , 'dark');
      }

    
  }
 

  useEffect(() => {

    if(localStorage.getItem('theme') === 'dark'){
      settheme('dark');
    }else{
      settheme('light');
    }
       
  }, []);



  return (
    <ThemeContext.Provider value = {{theme ,changeTheme} } >
      {children}
    </ThemeContext.Provider>
  )
};
