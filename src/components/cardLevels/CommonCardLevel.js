import React from 'react';

const CommonCardLevel = (props) => {
    return (
        <div>
            <label>
                Current Card Level <br />

                <select
                    value={props.cardLevel}
                    name="cardLevel"
                    onChange={props.setCardValues}>
                    
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>

                    {/* <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    <option value="six">6</option>
                    <option value="seven">7</option>
                    <option value="eight">8</option>
                    <option value="nine">9</option>
                    <option value="ten">10</option>
                    <option value="eleven">11</option>
                    <option value="twelve">12</option> */}
                </select>
                <h3>{props.cardLevel}</h3>
            </label>
        </div>
    )
}
export default CommonCardLevel;