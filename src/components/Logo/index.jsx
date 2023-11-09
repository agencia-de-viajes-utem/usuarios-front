import { Link } from "wouter";
const Logo = () => {
    return (
        <Link href="/">
            <div className="logo">
                <img src="src/assets/logo.png" alt="Logo" />
            </div>
        </Link>
    );
};
export default Logo;
