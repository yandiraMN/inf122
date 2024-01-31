import React from 'react';
import "../style/Tabs.css";
function Tabs(){
  return (
    <div class="tabs" >
                <button class="tabs-background-item active">
                    <p class="tabs-background-item-text">Portfolio</p>
                </button>
                <button class="tabs-background-item">
                    <p class="tabs-background-item-text">Skills</p>
                </button>
    </div >
  );
  }
export default Tabs;