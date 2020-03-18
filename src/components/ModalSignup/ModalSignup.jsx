import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, Form, Input, Tooltip } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

const ModalSignup = ({ modalSignup, handleModalSignup, signup }) => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	const user = { name, password, cpassword };

	const [form] = Form.useForm();

	const onSubmit = () => {
		form.validateFields().then(() => {
			form.resetFields();
			signup(user);
		});
	};

	return (
		<Modal
			id="modal-signup"
			title="Registro de usuário"
			visible={modalSignup}
			onOk={onSubmit}
			okText="Registrar"
			onCancel={handleModalSignup}
		>
			<Form form={form}>
				<Form.Item
					name="name"
					rules={[
						{
							required: true,
							message: 'Por favor, coloque o nome de usuário desejado',
							whitespace: true,
						},
					]}
				>
					<Input
						value={name}
						placeholder="Nome de usuário desejado"
						size="large"
						prefix={<UserOutlined />}
						suffix={
							<Tooltip title="Coloque um nome de usuário válido">
								<InfoCircleOutlined />
							</Tooltip>
						}
						onChange={({ target }) => setName(target.value)}
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Por favor, coloque a senha desejada',
						},
						{
							min: 8,
							message: 'A senha deve ter pelo menos 8 caracteres',
						},
					]}
				>
					<Input.Password
						value={password}
						size="large"
						placeholder="Senha desejada"
						onChange={({ target }) => setPassword(target.value)}
					/>
				</Form.Item>
				<Form.Item
					name="cpassword"
					rules={[
						{
							required: true,
							message: 'Por favor confirme sua senha',
						},
						({ getFieldValue }) => ({
							validator(rule, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}

								// eslint-disable-next-line prefer-promise-reject-errors
								return Promise.reject(
									'As duas senhas que você inseriu não são iguais!'
								);
							},
						}),
					]}
				>
					<Input.Password
						value={cpassword}
						size="large"
						placeholder="Confirme sua senha"
						onChange={({ target }) => setCpassword(target.value)}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

ModalSignup.propTypes = {
	modalSignup: PropTypes.bool.isRequired,
	signup: PropTypes.func.isRequired,
	handleModalSignup: PropTypes.func.isRequired,
};

export default ModalSignup;
