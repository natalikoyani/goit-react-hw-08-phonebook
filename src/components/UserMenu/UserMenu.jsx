import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Btn } from 'components/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </div>
  );
};
