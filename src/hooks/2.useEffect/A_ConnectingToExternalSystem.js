import React from 'react'
import A1_ConnectingToChatServer from './A1_ConnectingToChatServer'
import A2_Listening_globalBrowserEvent from './A2_Listening_globalBrowserEvent'
import A3_Controlling_modalDialog from './A3_Controlling_modalDialog'
import A4_TrackingElementVisibility from './A4_TrackingElementVisibility'

function A_ConnectingToExternalSystem() {
  return (
    <div>
        <hr />
        <h3>Usage</h3>
        <h4>A. Connecting to an external system </h4>
        <A1_ConnectingToChatServer />
        <A2_Listening_globalBrowserEvent />
        <A3_Controlling_modalDialog />
        <A4_TrackingElementVisibility />
    </div>
  )
}

export default A_ConnectingToExternalSystem