'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { login } from '../app/store';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import SocialIcon from '../components/SocialIcon';
import { loginValidationSchema } from '../validation/loginValidationSchema';




export const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data) => {
    console.log('data', data);
    dispatch(login());
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-white">
      <div>
        <Row className="p-4 rounded align-items-center ">
          <Col md={6}>
            <h3 className="mb-1 fw-semibold fs-2">Sign In</h3>
            <p className="mb-4">
              New user?{' '}
              <a href="#" className="text-primary fw-semibold text-decoration-none">
                Create an account
              </a>
            </p>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Username or email"
                  {...register('username')}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register('password')}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check type="checkbox" id="remember" className="me-2" />
                <Form.Label htmlFor="remember" className="mb-0">
                  Keep me signed in
                </Form.Label>
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100 mb-3">
                Sign In
              </Button>
            </Form>

            <div className="d-flex align-items-center text-muted my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 small">Or Sign In With</span>
              <hr className="flex-grow-1" />
            </div>

            <div className="d-flex justify-content-center gap-3">
              <SocialIcon icon={<FaGoogle />} />
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaTwitter />} />
            </div>
          </Col>

          <Col md={6} className="d-none d-md-flex justify-content-center">
            <img
              src="https://thebrokersocial.com/wp-content/uploads/2023/08/Sign-In.png"
              alt="login illustration"
              style={{ maxWidth: '80%' }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
