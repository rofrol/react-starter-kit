import Cycle from '@cycle/core';
import { makeDOMDriver } from '@cycle/dom';

function main(drivers) {
  return {
    DOM: drivers.DOM.select('input').events('click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        <div>
          <input type="checkbox" /> Toggle me
          <p>{toggled ? 'ON' : 'OFF'}</p>
        </div>
      )
  };
}


const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
