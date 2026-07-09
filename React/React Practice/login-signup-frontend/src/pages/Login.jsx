import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

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

            const response = await loginUser(user);

            alert(response.data.message);

            navigate("/");

        }

        catch (error) {

            if (error.response) {

                alert(error.response.data.message);

            }

            else {

                alert("Unable to connect to server.");

            }

        }

    }

    return (

        <div>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

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

                <button type="submit">
                    Login
                </button>

            </form>

            <br />

            <p>
                Don't have an account?{" "}
                <Link to="/signup">Register</Link>
            </p>

        </div>

    );

}