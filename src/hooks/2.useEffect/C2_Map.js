import React, { useRef, useEffect } from 'react'
import { MapWidget }  from './C3_MapWidget'

function C2_Map({zoomLevel}) {
    const containerRef = useRef(null)
    const mapRef = useRef(null)

    useEffect(()=>{
        if(mapRef.current === null){
            mapRef.current = new MapWidget(containerRef.current)
        }

        const map  = mapRef.current
        console.log(map)
        map.setZoom(zoomLevel)
    },[zoomLevel])
  return (
    <div 
        ref={containerRef}
        style={{
            width: 200,
            height: 200
        }}
    />
  )
}

export default C2_Map