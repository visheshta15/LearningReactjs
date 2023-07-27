import React from 'react'
import F_A1_MyForm from './F_A1_MyForm'
import err1 from './err1.png'
import F_A3_MyForm from './F_A3_MyForm'
function F_A_AccessOtherComponentDOM() {
  return (
    <div>
        <h4>C. Accessing another component's DOM nodes </h4>
        <h5></h5>
        <p>{`When you put a ref on a built-in component that outputs a browser element like <input />, React will set that ref's current property to the corresponding DOM node (such as the actual <input /> in the browser).`}</p>
        <p>{`However, if you try to put a ref on your own component, like <MyInput />, by default you will get null. Here is an example demonstrating it. Notice how clicking the button does not focus the input:`}</p>
        <F_A1_MyForm />
        <img src={err1} alt="" height={300} />

        <p><b>This happens because by default React does not let a component access the DOM nodes of other components. Not even for its own children! This is intentional.</b> Refs are an escape hatch that should be used sparingly. Manually manipulating another component’s DOM nodes makes your code even more fragile.</p>
        <p>{`Instead, components that want to expose their DOM nodes have to opt in to that behavior. A component can specify that it “forwards” its ref to one of its children. Here’s how MyInput can use the forwardRef API:
        `}</p>
        <F_A3_MyForm />
    </div>
  )
}

export default F_A_AccessOtherComponentDOM