import AuthLayout from "../components/layout/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";
import FormRegister from "../components/fragments/FormRegister";

const RegisterPage = () => {
    return (
    <AuthLayout title="Register">
        <FormRegister />
    </AuthLayout>
 );
};

export default RegisterPage;