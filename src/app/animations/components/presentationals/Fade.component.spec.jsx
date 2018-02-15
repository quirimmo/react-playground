import React from 'react';
import Fade from './Fade.component.jsx';
import { CSSTransition } from 'react-transition-group';

describe.only('Fade', () => {
    const wrapper = shallow(<Fade duration={500}><div>CHILD</div></Fade>);

    it('should define the main component', () => {
        wrapper.should.not.be.undefined;
    });

    it('should define the CSSTransition component', () => {
        wrapper.find(CSSTransition).should.not.be.undefined;
    });

    it('should add the class fade to the CSSTransition component', () => {
        wrapper.find(CSSTransition).hasClass('fade').should.be.true;
    });
});