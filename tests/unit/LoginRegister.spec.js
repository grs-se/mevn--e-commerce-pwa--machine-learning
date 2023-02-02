import { mount } from '@vue/test-utils';

import LoginRegister from '@/components/LoginRegister/LoginRegister.vue';

describe('LoginRegister Component', () => {
	it('check if truthy', () => {
		const wrapper = mount(LoginRegister);
		expect(wrapper).toBeTruthy();
	});
});
