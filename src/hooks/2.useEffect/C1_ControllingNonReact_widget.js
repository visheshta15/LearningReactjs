import React, { useState } from 'react'
import C2_Map from './C2_Map'

function C_ControllingNonReact_widget() {
    const [zoomLevel, setZoomLevel] = useState(0)
  return (
    <div>
        <h4>C. Controlling a non-React widget</h4>
        <p>Sometimes, you want to keep an external system synchronized to some prop or state of your component.
        <br />
        For example, if you have a third-party map widget or a video player component written without React, you can use an Effect to call methods on it that make its state match the current state of your React component. This Effect creates an instance of a MapWidget class defined in map-widget.js. When you change the zoomLevel prop of the Map component, the Effect calls the setZoom() on the class instance to keep it synchronized:</p>
        <br />

        {`Zoom level : ${zoomLevel}x `}
        <button onClick={()=>setZoomLevel(zoomLevel+1)}>+</button>
        <button onClick={()=>setZoomLevel(zoomLevel-1)}>-</button>
        <C2_Map zoomLevel={zoomLevel} />

        <p>In this example, a cleanup function is not needed because the MapWidget class manages only the DOM node that was passed to it. After the Map React component is removed from the tree, both the DOM node and the MapWidget class instance will be automatically garbage-collected by the browser JavaScript engine.</p>
        <hr />
    </div>
  )
}

export default C_ControllingNonReact_widget