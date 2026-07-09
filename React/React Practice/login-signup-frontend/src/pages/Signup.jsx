import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";

export default function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(event) {

        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });

    }

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            const response = await registerUser(user);

            setMessage(response.data.message);

            alert(response.data.message);

            navigate("/login");

        } catch (error) {

            if (error.response) {

                if (error.response.status === 400) {

                    const errors = error.response.data;

                    alert(Object.values(errors).join("\n"));

                } else {

                    alert(error.response.data.message);

                }

            } else {

                alert("Unable to connect to server.");

            }

        }

    }

    return (

        <div>

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <div>
                    <label>Confirm Password</label>
                    <br />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <br />

                <button type="submit">
                    Register
                </button>

            </form>

            <br />

            <p>{message}</p>

            <p>
                Already have an account?{" "}
                <Link to="/login">Login</Link>
            </p>

        </div>

    );

}