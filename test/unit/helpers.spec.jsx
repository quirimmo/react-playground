import { expect, should } from 'chai';
import { sinon, spy } from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.expect = expect;
global.should = should;
global.sinon = sinon;
global.spy = spy;

global.mount = Enzyme.mount;
global.render = Enzyme.render;
global.shallow = Enzyme.shallow;