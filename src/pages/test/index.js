import React, { useState } from "react";
import EffectHook from "../../components/Test/EffectHook";


const TestPage  = () => {
  const [menuNo, setMenuNo] = useState(0);
  return (
    <div>
      <h2>
        Test part for Hooks.
      </h2>
      <ul>
        <li onClick={() => setMenuNo(0)} style={{cursor: "pointer"}}>EffectHook</li>
      </ul>
      {menuNo === 0 && (
        <EffectHook />
      )}
    </div>
  );
}

export default TestPage;