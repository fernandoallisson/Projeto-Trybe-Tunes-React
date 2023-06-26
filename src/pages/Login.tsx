import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';

// type LoginProps = {

// };

export default function Login() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await createUser({ name });
      setIsLoading(false);
      navigate('/search');
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const isButtonDisabled = name.length < 3 || isLoading;
  const div = (
    <form onSubmit={ handleFormSubmit }>
      <label htmlFor="nameInput">Nome:</label>
      <input
        id="nameInput"
        type="text"
        value={ name }
        onChange={ handleNameChange }
        data-testid="login-name-input"
      />
      <button
        type="submit"
        disabled={ isButtonDisabled }
        data-testid="login-submit-button"
      >
        Entrar
      </button>
    </form>
  );
  return (
    <div>
      {isLoading
        ? <p>Carregando...</p>
        : div}
    </div>
  );
}
