import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from '../src/enzyme';

import App from '../src/components/App';
import OrderKitchen from '../src/components/OrderKitchen'
import OrderBurger from '../src/components/BurgerOrder'
import Count from '../src/components/Count'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Dibujando ordenes de cocina',()=>{
  const div=document.createElement('div');
  ReactDOM.render(<OrderKitchen />,div);
  ReactDOM.unmountComponentAtNode(div);
}
);
it('Dibujando ordenes de hamburgesas',()=>{
  const div=document.createElement('div');
  ReactDOM.render(<OrderBurger />,div);
  ReactDOM.unmountComponentAtNode(div);
}
);
it('Dibujando conatdores de cafe',()=>{
  const div=document.createElement('div');
  ReactDOM.render(<Count />,div);
  ReactDOM.unmountComponentAtNode(div);
}
);
describe('contadores', () => {

  it('dibuja contador de cafe', () => {
    const cafe="cafe";
    const wrapper = mount(<Count name={cafe} />);
    console.log(wrapper.debug());
    expect(wrapper.find('cafe')).toBeDefined();
  });
});