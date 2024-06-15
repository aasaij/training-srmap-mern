import React from 'react'

const ContentOld = () => {
    const nameList = [
        "Vamsi",
        "Abdulla",
        "Ramesh",
        "Venkatesh",
        "Ispreet",
        "Phalgun",
      ];
    
    
    const handleNameChange = () => {
        let index = Math.floor(Math.random() * nameList.length);
        return nameList[index];
      };
      return (
        <main>
          <p>
            Enjoy Learning 
            <span style={{color:"blue"}}>
                {" " + handleNameChange()}
            </span>
          </p>
        </main>
      );
    };
    
export default ContentOld
