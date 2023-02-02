import { mount } from '@vue/test-utils';

import LoginRegister from '@/components/LoginRegister/LoginRegister.vue';

describe('LoginRegister Component', () => {
	it('check if truthy', () => {
		const wrapper = mount(LoginRegister);
		expect(wrapper).toBeTruthy();
	});

	// it('Check the route path', () => {
	// 	const $route = { path: 'http://localhost:8080/LoginRegister' };
	// 	const wrapper = mount(LoginRegister, {
	// 		mocks: {
	// 			$route,
	// 		},
	// 	});

	// 	// console.log('wrapper.vm.$route.path', wrapper.vm.$route.path);
	// 	expect(wrapper.vm.$route).toBe($route);
	// });

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

	it('check register function', async () => {
		const wrapper = mount(LoginRegister);

		const Register_input = wrapper.find('.register-input');

		// enter mail and password into inputs
		const Email_input = wrapper.find('.reg-email');
		const Pass_input = wrapper.find('.reg-pass');
		const ConfPass_input = wrapper.find('.confirm-pass');

		// set email and pass data
		let email = 'A@A.com';
		let pass = '12345678';
		let Cpass = '12345678';

		await Email_input.setValue(email);
		await Pass_input.setValue(pass);
		await ConfPass_input.setValue(Cpass);

		jest.spyOn(wrapper.vm, 'Register');

		// fire on register input
		Register_input.trigger('click');

		// check if register has been called
		expect(wrapper.vm.Register).toHaveBeenCalled();

		// check the entered data on data method
		console.log('unit test email data', wrapper.vm.$data.RegisterData.Email);
		expect(wrapper.vm.$data.RegisterData.Email).toBe(email);
		expect(wrapper.vm.$data.RegisterData.Pass).toBe(pass);
		expect(wrapper.vm.$data.RegisterData.confirmPass).toBe(Cpass);
	});
});
