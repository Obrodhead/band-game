import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
      <div 
      className="card" 
      value={props.id} 
      onClick={() => props.handleClick(props.id)}
    >
        <div className="img-container">
          <img src={props.image} />
        </div>
      </div>
    
  );
}

export default FriendCard;