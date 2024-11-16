import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Form, Input, Button, Title } from './styles';

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
});

const Cadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastro</Title>
        <Input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <Input {...register('password')} type="password" placeholder="Senha" />
        <p>{errors.password?.message}</p>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Cadastro;
