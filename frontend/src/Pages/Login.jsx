
import { useContext, useEffect, useRef, useState } from "react";
import LoginImage from "../assets/Images/LoginImage.avif"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Reducers/UserSlice";
import { MainContext } from "../MainContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    const { notify } = useContext(MainContext)
    const user = useSelector(state => state.user.data);
    const auth = useSelector(state => state.user.data?.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ImageRef = useRef()
    const FormRefRef = useRef()


    useEffect(() => {
        if (auth === true) {
            navigate("/");
        }
    }, [auth, navigate]);


    const LoginUserHandler = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        if (!data.email || !data.password) {
            notify("All fields are required", "error");
            return;
        }

        if (user?.email === data.email && user?.password === data.password) {
            const updatedUser = {
                data: {
                    email: data.email,
                    password: data.password
                },
                auth: true

            }
            dispatch(login(updatedUser));
            notify("Login successfully", "success")

        } else {
            notify("Invalid Credentials", "error");
        }
    };


    useGSAP(() => {
        gsap.from(ImageRef.current, {
            x: -100,
            duration: 2,
            opacity: 0,
            ease: "power3.out",
        })
        gsap.from(FormRefRef.current, {
            x: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        },)

    }, []);



    return (
        <section className="w-full h-screen flex flex-col md:flex-row overflow-hidden">

            <div className="md:w-1/2 w-full h-64 md:h-auto" ref={ImageRef}>
                <img
                    src={LoginImage}
                    alt="Login"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Form Section */}
            <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-8" ref={FormRefRef}>
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-[cinzel] ">Welcome Back</h2>

                    <form className="space-y-4 font-[cardo]" onSubmit={LoginUserHandler}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    name="password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                />
                                <span
                                    onClick={togglePassword}
                                    className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full font-[cinzel]  bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-sm text-center text-gray-500 mt-4 font-[cinzel] ">
                        Don’t have an account? <Link to={"/sign-up"} className="text-blue-600 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login
