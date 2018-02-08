import React from 'react';

import MainContent from './MainContent.component.jsx';

describe('MainContent', () => {
    const menuItems = [{
        id: 1,
        path: '/path1',
        component: function() {}
    }, {
        id: 2,
        path: '/path2',
        component: function() {}
    }];
    const wrapper = shallow(<MainContent items={menuItems} />);

    it('should define the main component', () => {
        wrapper.should.not.be.undefined;
    });

    it('should define the Switch component', () => {
        wrapper.find('Switch').should.not.be.undefined;
    });

    it('should define a Route component for each menu item', () => {
        wrapper.find('Route').length.should.be.eql(2);
    });
});