import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function useAuth() {
    const {fullName, email, token, loading} = useSelector(state => state.auth);

    return {
        isAuth: !!email,
        fullName,
        email,
        token,
        loading,
    }
}

export default useAuth;