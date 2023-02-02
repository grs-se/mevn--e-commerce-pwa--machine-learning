import { mount } from '@vue/test-utils';

import LoginRegister from '@/components/LoginRegister/LoginRegister.vue';

describe('LoginRegister Component', () => {
	it('check if truthy', () => {
		const wrapper = mount(LoginRegister);
		expect(wrapper).toBeTruthy();
	});

	it('Check the route path', () => {
		const $route = { path: 'http://localhost:8080/LoginRegister' };
		const wrapper = mount(LoginRegister, {
			mocks: {
				$route,
			},
		});

		expect(wrapper.vm.$route.path).toBe($route.path);
	});

	it('check login function', async () => {
		const wrapper = mount(LoginRegister);

		const Login_input = wrapper.find('.login-btn');

		// enter email and password into inputs
		const Email_input = wrapper.find('.email-input');
		const Pass_input = wrapper.find('.pass-input');

		// set email and pass data
		let email = 'A@A.com';
		let pass = '12345678';

		await Email_input.setValue(email);
		await Pass_input.setValue(pass);

		jest.spyOn(wrapper.vm, 'Login');

		// fire on .. press enter
		Login_input.trigger('click');

		// check that Login function has been called
		expect(wrapper.vm.Login).toHaveBeenCalled();
		// check the entered data on data methods
		expect(wrapper.vm.$data.LoginData.Email).toBe(email);
		expect(wrapper.vm.$data.LoginData.Password).toBe(pass);
	});
});
