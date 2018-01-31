import chai from 'chai';
import { sinon, spy } from 'sinon';
import sinonChai from 'sinon-chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

global.expect = chai.expect;
global.should = chai.should;
global.sinon = sinon;
global.spy = spy;
chai.should();
chai.use(sinonChai);

global.mount = Enzyme.mount;
global.render = Enzyme.render;
global.shallow = Enzyme.shallow;