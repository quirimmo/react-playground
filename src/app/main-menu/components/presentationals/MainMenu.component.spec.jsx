import React from 'react';

import MainMenu from './MainMenu.component.jsx';

describe('MainMenu', () => {
    const menuItems = [{
        id: 1,
        path: '/path1',
        component: function() {}
    }, {
        id: 2,
        path: '/path2',
        component: function() {}
    }];
    const wrapper = shallow(<MainMenu items={menuItems} />);

    it('should define the main component', () => {
        wrapper.should.not.be.undefined;
    });

    it('should define the div container', () => {
        wrapper.find('#main-menu').should.not.be.undefined;
    });

    it('should define a NavLink component for each menu item', () => {
        wrapper.find('NavLink').length.should.be.eql(2);
    });
});