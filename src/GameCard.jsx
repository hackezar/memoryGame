import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function GameCard({teamName, key, handleClick, imgClass="teamImg"}) {
    const [img, setImg] = useState()
  
    // Fetch the NFL logo images
    const fetchImage = async () => {
      const url = "https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=" + teamName
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setImg(json.teams[0].strBadge);
      } catch (error) {
        console.error(error.message);
      }
  }

  useEffect(() => {
    fetchImage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let classText = 'boardCard'
    

    return (
      <div className={classText} key={key} onClick={handleClick}>
        <img src={img} className={imgClass} alt='Team Logo'/>
        <div>{teamName}</div>
      </div>
    )
}

