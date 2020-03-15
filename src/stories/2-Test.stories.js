import React from 'react';
import { action } from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

// export default {
//     title: "test"
// };

// export const test = () => <textarea onClick={action('clicked')}> Hello test </textarea>

const stories = storiesOf("storybook knobs", module);
stories.addDecorator(withKnobs);

stories.add("with a button", () => (
    <button disabled={boolean("Disabled",false)}
     style={{backgroundColor:color("color", "red")}}
    >{text("Label", "hi test")} </button>
))

export const asDynamicVariables = () => {
    const name = text("Name", "James");
    const age = number("Age", 35);
    const content = `I am ${name} and I'm ${age} years old.`;
   
    return <div>{content}</div>;
  };

stories.add("as dynamic variables", () => {
    const name = text("Name","Hong");
    const content = `Hi ${name}. Good`;
    return <div>{content}</div>
})