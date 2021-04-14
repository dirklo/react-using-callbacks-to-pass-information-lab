import { expect } from 'chai';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('React', () => {

	it('should pass this test', () => {
		expect(["1", "2", "3"]).to.include('1');
	});
});
